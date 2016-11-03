function isSenderRouted (sender, receivers) {
  return receivers.filter(receiver => {
    return receiver.subscription.sender_id === sender.id
  }).length > 0
}

function mapSenders (data) {
  return data.senders.map(sender => {
    sender.state = 'contracted selectable'
    sender.node = {
      state: isSenderRouted(sender, data.receivers) ? 'routed' : 'unrouted'
    }
    return sender
  })
}

function mapReceivers (data) {
  return data.receivers.map(receiver => {
    receiver.state = 'contracted'
    receiver.node = {
      state: receiver.subscription.sender !== undefined ? 'routed' : 'unrouted'
    }
    return receiver
  })
}

export default (data, view) => {
  view.senders = mapSenders(data)
  view.receivers = mapReceivers(data)
  return view
}
