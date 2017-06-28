/*
Find the sender relevant to this new change and then check any existing
  changes - if a change regarding the same receiver already exists then
  delete that change before adding the new change
A receiver can only appear once in a list of staged changes
*/

export default (actions) => {
  return (receiver, senders, type, changes) => {
    let sender = ''

    if (type === 'route') {
      sender = senders.filter(sender => {
        return sender.state.includes('expanded')
      })[0]
    } else {
      sender = senders.filter(sender => {
        return sender.id === receiver.subscription.sender_id
      })[0]
    }
    let changeType = type

    if (changes) {
      changes.forEach(change => {
        if (change.receiver.id === receiver.id) {
          let rID = receiver.id
          let sID = change.sender.id
          let changeType = change.type
          actions.unstageChange({change})
          actions.removeChange({sID, rID, changeType})
        }
      })
    }
    actions.addChange({ sender, receiver, changeType })
  }
}
