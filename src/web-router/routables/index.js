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
    return receiver.subscription.sender_id === sender.id && !receiver.state.includes('removed')
  })
}

function mapInitialSenderState (senders) {
  return senders.map(sender => {
    sender = Object.assign({}, sender)
    sender.state = mapState(sender).check().contract().selectable().state()
    sender.stateString = stateToString(sender.state)
    return sender
  })
}

function mapSenderRoutedState (senders, receivers) {
  return senders.map(sender => {
    sender = Object.assign({}, sender)
    let senderMapState = mapState(sender).unroute()
    if (isSenderRouted(sender, receivers)) senderMapState.route()
    sender.state = senderMapState.state()
    sender.stateString = stateToString(sender.state)
    return sender
  })
}

function mapInitialReceiverState (receivers) {
  return receivers.map(receiver => {
    receiver = Object.assign({}, receiver)
    receiver.state = mapState(receiver).check().contract().notSelectable().state()
    receiver.stateString = stateToString(receiver.state)
    return receiver
  })
}

function mapRoutedReceivers (receivers) {
  return receivers.map(receiver => {
    receiver = Object.assign({}, receiver)
    let receiverMapState = mapState(receiver).unroute()
    if (receiver.subscription.sender_id !== null) receiverMapState.route()
    receiver.state = receiverMapState.state()
    receiver.stateString = stateToString(receiver.state)
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
    routable.stateString = stateToString(routable.state)
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
      routable.stateString = stateToString(routable.state)
    }
    return routable
  })
}

function mapCheckAll (routables) {
  return routables.map(routable => {
    routable = Object.assign({}, routable)
    if (routable.state.includes('fuzzymatch')) {
      let routableMapState = mapState(routable).check()
      routable.state = routableMapState.state()
      routable.stateString = stateToString(routable.state)
    }
    return routable
  })
}

function mapCheckNone (routables) {
  return routables.map(routable => {
    routable = Object.assign({}, routable)
    if (routable.state.includes('fuzzymatch')) {
      let routableMapState = mapState(routable).uncheck()
      routable.state = routableMapState.state()
      routable.stateString = stateToString(routable.state)
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
    return sender.state && sender.state.includes('expanded')
  })[0] || { state: ['contracted'] }

  let mapExpandedState = mapState(expanded).contract().unroute()
  if (expandedSender.state.includes('expanded')) mapExpandedState.expand()
  if (expandedSender.state.includes('routed')) mapExpandedState.route()
  expanded.state = mapExpandedState.state()
  expanded.stateString = stateToString(expanded.state)
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
      receiver.stateString = stateToString(receiver.state)
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
      receiver.stateString = stateToString(receiver.state)
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
  let newReceivers = mapInitialReceiverState([grain.post])
  newReceivers = mapRoutedReceivers(newReceivers)
  newReceivers = newReceivers.map(receiver => {
    receiver = Object.assign({}, receiver)
    receiver.state = mapState(receiver).uncheck().state()
    receiver.stateString = stateToString(receiver.state)
    return receiver
  })
  return receivers.concat(newReceivers)
}

function mapRemoveReceivers (receivers, grain) {
  receivers.forEach(receiver => {
    if (receiver.id === grain.pre.id) {
      receiver.state = mapState(receiver).remove().state()
      receiver.stateString = stateToString(receiver.state)
    }
  })

  return receivers
}

function mapUpdateReceivers (receivers, grain) {
  receivers = receivers.map(receiver => {
    receiver = Object.assign({}, receiver)
    if (grain.post.id === receiver.id) {
      Object.keys(grain.post)
        .filter(key => {
          return key !== 'subscription'
        })
        .forEach(key => {
          receiver[key] = grain.post[key]
        })
    }
    return receiver
  })
  return receivers
}

function mapRoutesWithUpdatedReceivers (routes, senders, removed, added, updated) {
  let removeIndexes = []
  removed.forEach(receiver => {
    routes.forEach((route, index) => {
      if (route.receiver.id === receiver.id) {
        removeIndexes = [index].concat(removeIndexes)
      }
    })
  })

  updated.forEach(grain => {
    let isReplacing = grain.post.subscription.sender_id !== null && grain.pre.subscription.sender_id !== null
    let isAdding = grain.post.subscription.sender_id !== null && grain.pre.subscription.sender_id === null

    routes.forEach((route, index) => {
      let matchedPost = route.receiver.id === grain.post.id && route.sender.id === grain.post.subscription.sender_id
      let matchedPre = route.receiver.id === grain.pre.id && route.sender.id === grain.pre.subscription.sender_id
      if (matchedPost || matchedPre) {
        removeIndexes = [index].concat(removeIndexes)
      }
    })

    if (isAdding || isReplacing) {
      added.push(grain.post)
    }
  })

  removeIndexes.forEach(index => {
    routes = remove(routes, index)
  })

  let addedRoutes = mapInitialRouted(senders, added, [])
  routes = routes.concat(addedRoutes)

  return routes
}

function mapRoutesWithUpdatedSenders (routes, receivers, removed, added) {
  let removeIndexes = []
  removed.forEach(sender => {
    routes.forEach((route, index) => {
      if (route.sender.id === sender.id) {
        removeIndexes = [index].concat(removeIndexes)
      }
    })
  })

  removeIndexes.forEach(index => {
    routes = remove(routes, index)
  })

  let addedRoutes = mapInitialRouted(added, receivers, [])
  routes = routes.concat(addedRoutes)
  return routes
}

function mapUpdateSenders (senders, receivers, flows, grain) {
  senders = senders.map(sender => {
    sender = Object.assign({}, sender)
    if (grain.post.id === sender.id) {
      Object.keys(grain.post)
        .forEach(key => {
          sender[key] = grain.post[key]
        })
    }
    return sender
  })
  senders = mapSenderFormats(senders, flows)
  return senders
}

function mapAddSenders (senders, receivers, flows, grain) {
  let newSenders = mapSenderFormats([grain.post], flows)
  newSenders = mapInitialSenderState(newSenders)
  newSenders = mapSenderRoutedState(newSenders, receivers)
  newSenders = newSenders.map(sender => {
    sender = Object.assign({}, sender)
    sender.state = mapState(sender).uncheck().state()
    sender.stateString = stateToString(sender.state)
    return sender
  })
  return senders.concat(newSenders)
}

function mapRemoveSenders (senders, receivers, flows, grain) {
  senders.forEach(sender => {
    if (sender.id === grain.pre.id) {
      sender.state = mapState(sender).remove().state()
      sender.stateString = stateToString(sender.state)
    }
  })
  return senders
}

function mapUpdateFlow (flows, grain) {
  flows = flows.map(flow => {
    flow = Object.assign({}, flow)
    if (grain.post.id === flow.id) {
      Object.keys(grain.post)
        .forEach(key => {
          flow[key] = grain.post[key]
        })
    }
    return flow
  })
  return flows
}

function mapAddFlow (flows, grain) {
  return flows.concat(grain.post)
}

function mapRemoveFlow (flows, grain) {
  let flowIndex = -1
  flows.forEach((flow, index) => {
    if (flow.id === grain.pre.id) flowIndex = index
  })
  return remove(flows, flowIndex)
}

function stateToString (state) {
  return state.filter(state => {
    return state !== ''
  })
  .join(' ')
}

function mapRoutesRoutableState (routes, receivers, senders) {
  routes = routes.map(route => {
    route = Object.assign({}, route)
    let sender = senders.filter(sender => {
      return sender.id === route.sender.id
    })[0]
    route.sender = Object.assign({}, route.sender, sender)

    let receiver = receivers.filter(receiver => {
      return receiver.id === route.receiver.id
    })[0]
    route.receiver = Object.assign({}, route.receiver, receiver)

    return route
  })
  return routes
}

function sortRoutes (left, right) {
  let leftReceiverId = left.receiver.id
  let rightReceiverId = right.receiver.id
  let leftSenderId = left.sender.id
  let rightSenderId = right.sender.id
  if (leftReceiverId === rightReceiverId && leftSenderId === rightSenderId) return 0
  if (leftReceiverId < rightReceiverId && leftSenderId === rightSenderId) return -1
  if (leftReceiverId < rightReceiverId && leftSenderId < rightSenderId) return -2
  if (leftReceiverId < rightReceiverId && leftSenderId > rightSenderId) return -3
  if (leftReceiverId > rightReceiverId && leftSenderId === rightSenderId) return 1
  if (leftReceiverId > rightReceiverId && leftSenderId < rightSenderId) return 2
  if (leftReceiverId > rightReceiverId && leftSenderId > rightSenderId) return 3
  return 0
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
        senders.sort(window.nmos.defaultSort)
        receivers.sort(window.nmos.defaultSort)
        routes.sort(sortRoutes)
        return routables
      },
      receivers (data) {
        receivers = data
        receivers = mapInitialReceiverState(receivers)
        receivers = mapRoutedReceivers(receivers)
        senders = mapSenderRoutedState(senders, receivers)
        routes = mapInitialRouted(senders, receivers, routes)
        senders.sort(window.nmos.defaultSort)
        receivers.sort(window.nmos.defaultSort)
        routes.sort(sortRoutes)
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
      receivers (id) {
        if (id === 'all') receivers = mapCheckAll(receivers)
        else if (id === 'none') receivers = mapCheckNone(receivers)
        else receivers = mapCheck(receivers, id)
        routes = mapRoutesRoutableState(routes, receivers, senders)
        return routables
      },
      senders (id) {
        if (id === 'all') senders = mapCheckAll(senders)
        else if (id === 'none') senders = mapCheckNone(senders)
        else senders = mapCheck(senders, id)
        routes = mapRoutesRoutableState(routes, receivers, senders)
        return routables
      }
    },
    expand (id) {
      senders = senders.map(sender => {
        sender = Object.assign({}, sender)
        let senderMapState = mapState(sender).contract()
        if (sender.id === id) senderMapState.expand()
        sender.state = senderMapState.state()
        sender.stateString = stateToString(sender.state)
        return sender
      })

      let expandedFormat = 'contracting'
      if (id) {
        expandedFormat = senders.filter(sender => {
          return sender.state.includes('expanded')
        })[0].format
      }

      receivers = receivers.map(receiver => {
        receiver = Object.assign({}, receiver)
        let receiverMapState = mapState(receiver).notSelectable().enable()
        if (receiver.format === expandedFormat) receiverMapState.selectable()
        else if (expandedFormat !== 'contracting') receiverMapState.disable()
        receiver.state = receiverMapState.state()
        receiver.stateString = stateToString(receiver.state)
        return receiver
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
      routes.sort(sortRoutes)
      return routables
    },
    unroute (receiverId) {
      receivers = mapUnroutedReceiver(receivers, receiverId)
      senders = mapSenderRoutedState(senders, receivers)
      routes = mapRoutes(routes, senders, receivers)
      routes.sort(sortRoutes)
      return routables
    },
    update: {
      senders (grains) {
        let removed = []
        let added = []
        grains.forEach(grain => {
          let mapSenders = noMap
          let hasPost = !isEmpty(grain.post)
          let hasPre = !isEmpty(grain.pre)
          if (hasPost && hasPre) {
            mapSenders = mapUpdateSenders
          } else if (hasPost) {
            added.push(grain.post)
            mapSenders = mapAddSenders
          } else if (hasPre) {
            removed.push(grain.pre)
            mapSenders = mapRemoveSenders
          }

          senders = mapSenders(senders, receivers, flows, grain)
          routes = mapRoutesWithUpdatedSenders(routes, receivers, removed, added)
          routes = mapRoutesRoutableState(routes, receivers, senders)
        })

        senders.sort(window.nmos.defaultSort)
        receivers.sort(window.nmos.defaultSort)
        routes.sort(sortRoutes)
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
            updated.push(grain)
            mapReceivers = mapUpdateReceivers
          } else if (hasPost) {
            added.push(grain.post)
            mapReceivers = mapAddReceivers
          } else if (hasPre) {
            removed.push(grain.pre)
            mapReceivers = mapRemoveReceivers
          }

          receivers = mapReceivers(receivers, grain)
        })

        senders = mapSenderRoutedState(senders, receivers)
        routes = mapRoutesWithUpdatedReceivers(routes, senders, removed, added, updated)
        routes = mapRoutesRoutableState(routes, receivers, senders)

        senders.sort(window.nmos.defaultSort)
        receivers.sort(window.nmos.defaultSort)
        routes.sort(sortRoutes)
        return routables
      },
      flows (grains) {
        grains.forEach(grain => {
          let mapFlows = noMap
          let hasPost = !isEmpty(grain.post)
          let hasPre = !isEmpty(grain.pre)
          if (hasPost && hasPre) mapFlows = mapUpdateFlow
          else if (hasPost) mapFlows = mapAddFlow
          else if (hasPre) mapFlows = mapRemoveFlow
          flows = mapFlows(flows, grain)
        })

        senders = mapSenderFormats(senders, flows)
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
