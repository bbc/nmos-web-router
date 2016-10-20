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
    receiver.state = 'contracted selectable'
    receiver.node = {
      state: receiver.subscription.sender !== undefined ? 'routed' : 'unrouted'
    }
    return receiver
  })
}

export default (data, view) => {
  let connections = Object.assign({}, view.connections)
  connections.senders = mapSenders(data)
  connections.receivers = mapReceivers(data)
  return connections
}
