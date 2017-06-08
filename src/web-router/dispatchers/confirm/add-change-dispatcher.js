export default (actions) => {
  return (receiver, senders, type) => {
    let sender = ''

    if (type === 'route') {
      sender = senders.filter(sender => {
        return sender.state.includes('expanded')
      })[0]
    } else {
      let targetID = receiver.subscription.sender_id
      sender = senders.filter(sender => {
        return sender.id === targetID
      })[0]
    }
    let changeType = type
    actions.addChange({ sender, receiver, changeType })
  }
}
