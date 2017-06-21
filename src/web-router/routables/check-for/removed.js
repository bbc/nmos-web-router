export default (senders, receivers, changes) => {
  // Should probably extend this to change the state of the sender and receiver
  // so that nodes don't remain yellow/red
  let removedSenders = senders.filter(sender => {
    return sender.state.includes('removed')
  })
  removedSenders.forEach(sender => {
    changes.forEach(change => {
      if (change.sender.id === sender.id) {
        change.state = 'unavailable-sender'
      }
    })
  })

  let removedReceivers = receivers.filter(receiver => {
    return receiver.state.includes('removed')
  })
  removedReceivers.forEach(receiver => {
    changes.forEach(change => {
      if (change.receiver.id === receiver.id) {
        change.state = 'unavailable-receiver'
      }
    })
  })
}
