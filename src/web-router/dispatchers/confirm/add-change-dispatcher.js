export default (actions) => {
  return (receiver, senders, type, changes) => {
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

    if (changes) {
      changes.forEach(change => {
        if (change.receiver.id === receiver.id) {
          let rID = receiver.id
          let sID = change.sender.id
          let changeType = change.type
          actions.removeChange({sID, rID, changeType})
        }
      })
    }
    actions.addChange({ sender, receiver, changeType })
  }
}
