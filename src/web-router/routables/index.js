import fuzzysearch from 'fuzzysearch'
import mapState from './map-state'

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

function getSender (senders, senderId) {
  return senders.filter(sender => {
    return sender.id === senderId
  })[0]
}

function mapInitialRouted (senders, receivers, routes) {
  return receivers
    .filter(receiver => {
      let routed = receiver.subscription.sender_id !== null
      let senderExists = getSender(senders, receiver.subscription.sender_id) !== undefined
      return routed && senderExists
    })
    .map(receiver => {
      return {
        state: 'routed',
        receiver,
        sender: getSender(senders, receiver.subscription.sender_id)
      }
    })
}

export default ({senders, flows, receivers, routes}) => {
  senders = senders || []
  flows = flows || []
  receivers = receivers || []
  routes = routes || []

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
        if (sender.id === id) senderMapState.expand()
        sender.state = senderMapState.state()
        return sender
      })
      return routables
    },
    contract () {
      routables.expand()
      return routables
    },
    route (receiverId, sender) {
      return routables
    },
    unroute () {
      return routables
    },
    update: {
      senders (grains) {
        return routables
      },
      receivers (grains) {
        return routables
      },
      flows (grains) {
        return routables
      }
    },
    data () {
      return {
        senders,
        receivers,
        flows,
        routes
      }
    },
    view () {
      return {
        senders () {
          return senders
        },
        receivers () {
          return receivers
        },
        routes () {
          return routes
        },
        expanded () {
          let expanded = {}
          expanded.state = mapState(expanded).contract().unroute().state()
          let expandedSender = senders.filter(sender => {
            return sender.state.includes('expanded')
          })[0] || { state: ['contracted'] }
          let expandedState = mapState(expanded).contract().unroute()
          if (expandedSender.state.includes('expanded')) expandedState.expand()
          expanded.id = expandedSender.id
          expanded.label = expandedSender.label
          expanded.description = expandedSender.description
          expanded.format = expandedSender.format
          if (expandedSender.state.includes('routed')) expandedState.route()
          expanded.state = expandedState.state()
          return expanded
        }
      }
    }
  }

  return routables
}
