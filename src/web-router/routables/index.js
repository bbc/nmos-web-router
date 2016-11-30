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

function updateSenderRoutedState (senders, receivers) {
  senders.forEach(sender => {
    sender.changeState.check().contract().selectable()
    if (isSenderRouted(sender, receivers)) sender.changeState.route()
    else sender.changeState.unroute()
  })
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
        updateSenderRoutedState(senders, receivers)
      },
      receivers (data) {
        receivers = data
        updateSenderRoutedState(senders, receivers)
      },
      flows (data) {
        flows = data
        updateSenderFormat(senders, flows)
      },
      devices (data) { devices = data },
      nodes (data) { nodes = data }
    },
    route (receiverId, sender) {},
    unroute () {},
    update: {
      senders (grain) {},
      receivers (grain) {},
      flows (grain) {},
      devices (grain) {},
      nodes (grain) {}
    },
    filter (term) {},
    check: {
      receiver () {},
      sender () {}
    },
    expand (senderId) {},
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
