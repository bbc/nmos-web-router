function getSender (senders, senderId) {
  return senders.filter(sender => {
    return sender.id === senderId
  })[0]
}

function mapRouted ({receivers, senders}) {
  return receivers
    .filter(receiver => {
      return receiver.subscription.routed
    })
    .map(receiver => {
      let sender = getSender(senders, receiver.subscription.routed.id)
      if (sender === undefined) console.log(receiver.subscription.routed.id)
      return {
        receiver,
        sender,
        state: 'routed'
      }
    })
}

function mapRouting ({receivers, senders}) {
  let routing = []
  receivers
    .filter(receiver => {
      return receiver.subscription.routing && receiver.subscription.routing.length > 0
    })
    .forEach(receiver => {
      routing = routing.concat(
        receiver.subscription.routing.map(sender => {
          return {
            receiver,
            sender,
            state: 'routing'
          }
        })
    )
    })
  return routing
}

function mapUnrouting ({receivers, senders}) {
  let unrouting = []
  receivers
    .filter(receiver => {
      return receiver.subscription.unrouting && receiver.subscription.unrouting.length > 0
    })
    .forEach(receiver => {
      unrouting = unrouting.concat(
        receiver.subscription.unrouting.map(sender => {
          return {
            receiver,
            sender,
            state: 'unrouting'
          }
        })
    )
    })
  return unrouting
}

export default ({senders, receivers}) => {
  return []
    .concat(mapRouted({receivers, senders}))
    .concat(mapRouting({receivers, senders}))
    .concat(mapUnrouting({receivers, senders}))
}
