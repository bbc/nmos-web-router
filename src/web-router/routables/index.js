import fuzzysearch from 'fuzzysearch'
import ChangeState from './change-state'

function updateSenderFormat (senders, flows) {
  senders.forEach(sender => {
    let flow = flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0] || {format: 'no'}
    sender.format = flow.format
  })
}

function updateWithChangeState (routables) {
  return routables.forEach(routable => {
    routable.changeState = ChangeState(routable)
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
    sender.changeState.check().contract().selectable()
  })
}

function updateSenderRoutedState (senders, receivers) {
  senders.forEach(sender => {
    if (isSenderRouted(sender, receivers)) sender.changeState.route()
    else sender.changeState.unroute()
  })
}

function updateReceiverInitialState (receivers) {
  receivers.forEach(receiver => {
    receiver.changeState.check().contract().notSelectable()
  })
}

function updateReceiverRoutedState (receivers) {
  receivers.forEach(receiver => {
    if (receiver.subscription.sender_id !== null) receiver.changeState.route()
    else receiver.changeState.unroute()
  })
}

function fuzzymatch (term, routables) {
  routables.forEach(routable => {
    let fuzzymatch = fuzzysearch(term.toLowerCase(), routable.label.toLowerCase()) || fuzzysearch(term.toLowerCase(), routable.id.toLowerCase())
    if (fuzzymatch) routable.changeState.fuzzymatch()
    else routable.changeState.fuzzymissmatch()
  })
}

function check (routables, id) {
  let routable = routables.filter(routable => {
    return routable.id === id
  })[0]
  if (routable.state.includes('checked')) routable.changeState.uncheck()
  else routable.changeState.check()
}

export default () => {
  let senders = []
  let receivers = []
  let flows = []
  let routes = []
  let devices = []
  let nodes = []

  let routables = {
    insert: {
      senders (data) {
        senders = data
        updateSenderFormat(senders, flows)
        updateWithChangeState(senders)
        updateSenderInitialState(senders)
        updateSenderRoutedState(senders, receivers)
      },
      receivers (data) {
        receivers = data
        updateWithChangeState(receivers)
        updateReceiverInitialState(receivers)
        updateSenderRoutedState(senders, receivers)
        updateReceiverRoutedState(receivers)
      },
      flows (data) {
        flows = data
        updateSenderFormat(senders, flows)
      },
      devices (data) { devices = data },
      nodes (data) { nodes = data }
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
    expand (senderId) {},
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
        routes
      }
    }
  }

  return routables
}
