export default (data, id, unicast) => {
  let expandedSender = data.senders.filter(sender => {
    return sender.id === id
  })[0]

  if (expandedSender && expandedSender.transport.includes('rtp.ucast')) unicast.inUse = true

  if (unicast.inUse) {
    let subscribedReceiver = data.receivers.filter(receiver => {
      return receiver.subscription.sender_id === expandedSender.id
    })[0]
    if (subscribedReceiver) {
      unicast.subscription_id = expandedSender.id
    }
  }
}
