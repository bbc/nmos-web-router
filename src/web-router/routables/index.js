import fuzzysearch from 'fuzzysearch'
import mapState from './map-state'

function remove (arr, index) {
  let newArr = [].concat(arr)
  newArr.splice(index, 1)
  return newArr
}

function noMap (routables) {
  return routables
}

function isEmpty (obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0 && obj.constructor === Object
}

function mapSenderFormats (senders, flows) {
  return senders.map(sender => {
    sender = Object.assign({}, sender)
    let flow = flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0] || {format: 'no'}
    sender.format = flow.format
    return sender
  })
}

function isSenderRouted (sender, receivers) {
  return receivers.some(receiver => {
    return receiver.subscription.sender_id === sender.id
  })
}

function mapInitialSenderState (senders) {
  return senders.map(sender => {
    sender = Object.assign({}, sender)
    sender.state = mapState(sender).check().contract().selectable().state()
    return sender
  })
}

function mapSenderRoutedState (senders, receivers) {
  return senders.map(sender => {
    sender = Object.assign({}, sender)
    let senderMapState = mapState(sender).unroute()
    if (isSenderRouted(sender, receivers)) senderMapState.route()
    sender.state = senderMapState.state()
    return sender
  })
}

function mapInitialReceiverState (receivers) {
  return receivers.map(receiver => {
    receiver = Object.assign({}, receiver)
    receiver.state = mapState(receiver).check().contract().notSelectable().state()
    return receiver
  })
}

function mapRoutedReceivers (receivers) {
  return receivers.map(receiver => {
    receiver = Object.assign({}, receiver)
    let receiverMapState = mapState(receiver).unroute()
    if (receiver.subscription.sender_id !== null) receiverMapState.route()
    receiver.state = receiverMapState.state()
    return receiver
  })
}

function mapFuzzymatch (term, routables) {
  return routables.map(routable => {
    routable = Object.assign({}, routable)
    let fuzzymatch = fuzzysearch(term.toLowerCase(), routable.label.toLowerCase()) || fuzzysearch(term.toLowerCase(), routable.id.toLowerCase())
    let routableMapState = mapState(routable)
    if (fuzzymatch) routableMapState.fuzzymatch()
    else routableMapState.fuzzymissmatch()
    routable.state = routableMapState.state()
    return routable
  })
}

function mapCheck (routables, id) {
  return routables.map(routable => {
    routable = Object.assign({}, routable)
    if (routable.id === id) {
      let routableMapState = mapState(routable).check()
      if (routable.state.includes('checked')) routableMapState.uncheck()
      routable.state = routableMapState.state()
    }
    return routable
  })
}

function get (routables, id) {
  let routable = routables.filter(routable => {
    return routable.id === id
  })[0]
  return Object.assign({}, routable)
}

function mapInitialRouted (senders, receivers, routes) {
  return receivers
    .filter(receiver => {
      let routed = receiver.subscription.sender_id !== null
      let sender = get(senders, receiver.subscription.sender_id)
      let senderExists = !isEmpty(sender)
      return routed && senderExists
    })
    .map(receiver => {
      let sender = get(senders, receiver.subscription.sender_id)
      return {
        state: 'routed',
        receiver,
        sender
      }
    })
}

function expanded (senders) {
  let expanded = {}
  let expandedSender = senders.filter(sender => {
    return sender.state.includes('expanded')
  })[0] || { state: ['contracted'] }

  let mapExpandedState = mapState(expanded).contract().unroute()
  if (expandedSender.state.includes('expanded')) mapExpandedState.expand()
  if (expandedSender.state.includes('routed')) mapExpandedState.route()
  expanded.state = mapExpandedState.state()

  expanded.id = expandedSender.id
  expanded.label = expandedSender.label
  expanded.description = expandedSender.description
  expanded.format = expandedSender.format

  return expanded
}

function mapNewRoutedReceiver (receivers, receiverId, senderId) {
  return receivers.map(receiver => {
    receiver = Object.assign({}, receiver)
    if (receiver.id === receiverId) {
      receiver.subscription.sender_id = senderId
      receiver.state = mapState(receiver).route().state()
    }
    return receiver
  })
}

function mapUnroutedReceiver (receivers, receiverId) {
  return receivers.map(receiver => {
    receiver = Object.assign({}, receiver)
    if (receiver.id === receiverId) {
      receiver.subscription.sender_id = null
      receiver.state = mapState(receiver).unroute().state()
    }
    return receiver
  })
}

function includesRoute (routes, route) {
  return routes.some(r => {
    let hasSender = r.sender.id === route.sender.id
    let hasReceiver = r.receiver.id === route.receiver.id
    return hasSender && hasReceiver
  })
}

function mapRouteState (routes, state) {
  return routes.map(route => {
    route = Object.assign({}, route)
    route.state = state
    return route
  })
}

function mapRoutes (routes, senders, receivers) {
  let oldRoutes = [].concat(routes)
  let newRoutes = mapInitialRouted(senders, receivers, routes)
  let oldRouting = routes.filter(route => { return route.state === 'routing' })
  let oldUnrouting = routes.filter(route => { return route.state === 'unrouting' })

  let routing = []
  let unrouting = []
  let routed = []

  newRoutes.forEach(newRoute => {
    if (!includesRoute(oldRoutes, newRoute)) {
      routing.push(newRoute)
    }
  })

  oldRoutes.forEach(oldRoute => {
    if (!includesRoute(newRoutes, oldRoute)) unrouting.push(oldRoute)
  })

  let allRoutes = [].concat(oldRoutes).concat(newRoutes)
  allRoutes.forEach(route => {
    if (!includesRoute(routed, route) && !includesRoute(routing, route) && !includesRoute(unrouting, route)) {
      if (includesRoute(oldRouting, route)) routing.push(route)
      else if (includesRoute(oldUnrouting, route)) unrouting.push(route)
      else routed.push(route)
    }
  })

  routing = mapRouteState(routing, 'routing')
  routed = mapRouteState(routed, 'routed')
  unrouting = mapRouteState(unrouting, 'unrouting')

  return [].concat(routing).concat(unrouting).concat(routed)
}

function mapAddReceivers (receivers, grain) {
  return receivers
}

function mapRemoveReceivers (receivers, grain) {
  let removeIndex = -1
  receivers.forEach((receiver, index) => {
    if (receiver.id === grain.pre.id) removeIndex = index
  })
  if (removeIndex !== -1) receivers = remove(receivers, removeIndex)

  return receivers
}

function mapUpdateReceivers (receivers, grain) {
  return receivers
}

function mapRoutesWithUpdatedReceivers (routes, removed, added, updated) {
  let removeIndexes = []
  removed.forEach(receiver => {
    routes.forEach((route, index) => {
      if (route.receiver.id === receiver.id) {
        removeIndexes = [index].concat(removeIndexes)
      }
    })
  })
  removeIndexes.forEach(index => {
    routes = remove(routes, index)
  })
  return routes
}

export default ({senders, flows, receivers, routes}) => {
  senders = senders || []
  flows = flows || []
  receivers = receivers || []
  routes = routes || []

  senders = [].concat(senders)
  flows = [].concat(flows)
  receivers = [].concat(receivers)
  routes = [].concat(routes)

  let routables = {
    insert: {
      senders (data) {
        senders = data
        senders = mapSenderFormats(senders, flows)
        senders = mapInitialSenderState(senders)
        senders = mapSenderRoutedState(senders, receivers)
        routes = mapInitialRouted(senders, receivers, routes)
        return routables
      },
      receivers (data) {
        receivers = data
        receivers = mapInitialReceiverState(receivers)
        receivers = mapRoutedReceivers(receivers)
        senders = mapSenderRoutedState(senders, receivers)
        routes = mapInitialRouted(senders, receivers, routes)
        return routables
      },
      flows (data) {
        flows = data
        senders = mapSenderFormats(senders, flows)
        return routables
      }
    },
    filter (term) {
      senders = mapFuzzymatch(term, senders)
      receivers = mapFuzzymatch(term, receivers)
      return routables
    },
    check: {
      receiver (id) {
        receivers = mapCheck(receivers, id)
        return routables
      },
      sender (id) {
        senders = mapCheck(senders, id)
        return routables
      }
    },
    expand (id) {
      senders = senders.map(sender => {
        sender = Object.assign({}, sender)
        let senderMapState = mapState(sender).contract()
        if (sender.id === id) {
          senderMapState.expand()
        }
        sender.state = senderMapState.state()
        return sender
      })
      return routables
    },
    contract () {
      routables.expand()
      return routables
    },
    route (receiverId, senderId) {
      receivers = mapNewRoutedReceiver(receivers, receiverId, senderId)
      senders = mapSenderRoutedState(senders, receivers)

      routes = routes.map(route => {
        route = Object.assign({}, route)
        if (route.receiver.id === receiverId && route.sender.id === senderId) route.state = 'routing'
        return route
      })
      routes = mapRoutes(routes, senders, receivers)
      return routables
    },
    unroute (receiverId) {
      receivers = mapUnroutedReceiver(receivers, receiverId)
      senders = mapSenderRoutedState(senders, receivers)
      routes = mapRoutes(routes, senders, receivers)
      return routables
    },
    update: {
      senders (grains) {
        return routables
      },
      receivers (grains) {
        let removed = []
        let added = []
        let updated = []
        grains.forEach(grain => {
          receivers = [].concat(receivers)
          let mapReceivers = noMap
          let hasPost = !isEmpty(grain.post)
          let hasPre = !isEmpty(grain.pre)
          if (hasPost && hasPre) {
            updated.push({
              id: grain.post.id
            })
            updated.push({
              id: grain.pre.id
            })
            mapReceivers = mapUpdateReceivers
          } else if (hasPost) {
            added.push({
              id: grain.post.id
            })
            mapReceivers = mapAddReceivers
          } else if (hasPre) {
            removed.push({
              id: grain.pre.id
            })
            mapReceivers = mapRemoveReceivers
          }

          receivers = mapReceivers(receivers, grain)
        })

        senders = mapSenderRoutedState(senders, receivers)
        routes = mapRoutesWithUpdatedReceivers(routes, removed, added, updated)

        return routables
      },
      flows (grains) {
        return routables
      }
    },
    view () {
      return {
        senders,
        receivers,
        flows,
        routes,
        expanded: expanded(senders)
      }
    }
  }

  return routables
}
