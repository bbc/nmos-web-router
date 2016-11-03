function mapReceivers (data, receivers) {
  return receivers.map(routable => {
    let matchingRoutable = data.receivers.filter(r => {
      return routable.id === r.id
    })[0]
    routable.node.state = 'unrouted'
    if (matchingRoutable === undefined) routable.state = 'disabled'
    else if (matchingRoutable.subscription.sender) routable.node.state = 'routed'
    return routable
  })
}

function isSenderRouted (sender, receivers) {
  return receivers.filter(receiver => {
    return receiver.subscription.sender_id === sender.id
  }).length > 0
}

function mapSenders (data, senders) {
  return senders.map(sender => {
    sender.node.state = isSenderRouted(sender, data.receivers) ? 'routed' : 'unrouted'
    return sender
  })
}

export default (data, view) => {
  view.receivers = mapReceivers(data, view.receivers)
  view.senders = mapSenders(data, view.senders)
  return view
}
