import fuzzysearch from 'fuzzysearch'
import mapState from './map-state'

function updateSenderFormat (senders, flows) {
  senders.forEach(sender => {
    let flow = flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0] || {format: 'no'}
    sender.format = flow.format
  })
}

function initialState (routables) {
  return routables.forEach(routable => {
    routable.state = mapState(routable).state()
    return routable
  })
}

function isSenderRouted (sender, receivers) {
  return receivers.some(receiver => {
    return receiver.subscription.sender_id === sender.id
  })
}

function updateSenderInitialState (senders) {
  senders.forEach(sender => {
    sender.state = mapState(sender).check().contract().selectable().state()
  })
}

function updateSenderRoutedState (senders, receivers) {
  senders.forEach(sender => {
    let senderMapState = mapState(sender).unroute()
    if (isSenderRouted(sender, receivers)) senderMapState.route()
    sender.state = senderMapState.state()
  })
}

function updateReceiverInitialState (receivers) {
  receivers.forEach(receiver => {
    receiver.state = mapState(receiver).check().contract().notSelectable().state()
  })
}

function updateReceiverRoutedState (receivers) {
  receivers.forEach(receiver => {
    let receiverMapState = mapState(receiver).unroute()
    if (receiver.subscription.sender_id !== null) receiverMapState.route()
    receiver.state = receiverMapState.state()
  })
}

function fuzzymatch (term, routables) {
  routables.forEach(routable => {
    let fuzzymatch = fuzzysearch(term.toLowerCase(), routable.label.toLowerCase()) || fuzzysearch(term.toLowerCase(), routable.id.toLowerCase())
    let routableMapState = mapState(routable)
    if (fuzzymatch) routableMapState.fuzzymatch()
    else routableMapState.fuzzymissmatch()
    routable.state = routableMapState.state()
  })
}

function check (routables, id) {
  let routable = routables.filter(routable => {
    return routable.id === id
  })[0]
  let routableMapState = mapState(routable).check()
  if (routable.state.includes('checked')) routableMapState.uncheck()
  routable.state = routableMapState.state()
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

export default () => {
  let expanded = {}
  expanded.state = mapState(expanded).contract().unroute().state()

  let senders = []
  let receivers = []
  let flows = []
  let routes = []

  let routables = {
    insert: {
      senders (data) {
        senders = data
        updateSenderFormat(senders, flows)
        initialState(senders)
        updateSenderInitialState(senders)
        updateSenderRoutedState(senders, receivers)
        routes = mapInitialRouted(senders, receivers, routes)
      },
      receivers (data) {
        receivers = data
        initialState(receivers)
        updateReceiverInitialState(receivers)
        updateSenderRoutedState(senders, receivers)
        updateReceiverRoutedState(receivers)
        routes = mapInitialRouted(senders, receivers, routes)
      },
      flows (data) {
        flows = data
        updateSenderFormat(senders, flows)
      }
    },
    filter (term) {
      fuzzymatch(term, senders)
      fuzzymatch(term, receivers)
    },
    check: {
      receiver (id) {
        check(receivers, id)
      },
      sender (id) {
        check(senders, id)
      }
    },
    expand (id) {
      delete expanded.id
      delete expanded.label
      delete expanded.description
      delete expanded.format

      let expandedState = mapState(expanded).contract().unroute()

      senders.forEach(sender => {
        let senderMapState = mapState(sender).contract()
        if (sender.id === id) {
          senderMapState.expand()
          expandedState.expand()
          if (sender.state.includes('routed')) expandedState.route()

          expanded.id = sender.id
          expanded.label = sender.label
          expanded.description = sender.description
          expanded.format = sender.format
        }
        sender.state = senderMapState.state()
      })

      expanded.state = expandedState.state()
    },
    contract () {
      routables.expand()
    },
    route (receiverId, sender) {},
    unroute () {},
    update: {
      senders (grains) {},
      receivers (grains) {},
      flows (grains) {},
      devices (grains) {},
      nodes (grains) {}
    },
    view () {
      return {
        senders,
        receivers,
        routes,
        expanded
      }
    }
  }

  return routables
}
