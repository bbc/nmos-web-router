/*
Extract the sender for each routing change (or use null if it is an unrouting change)
Pass the arrays of senders and corresponding receiver IDs to the routing API, along with
  the device id of the bulk device in question
*/

export default (actions) => {
  return (senders, bulkChanges, deviceID) => {
    console.log(bulkChanges)
    let bulkSenders = []
    let bulkReceiverIDs = []
    bulkChanges.forEach(change => {
      if (change.type === 'route') {
        let sender = senders.filter(sender => {
          return sender.id === change.sender.id
        })[0]
        sender = Object.assign({}, sender)
        delete sender.format
        delete sender.state
        delete sender.stateString
        bulkSenders.push(sender)
      } else {
        bulkSenders.push(null)
      }
      bulkReceiverIDs.push(change.receiver.id)
    })

    let bulkStuff = { senders: bulkSenders, receiverIDs: bulkReceiverIDs, deviceID: deviceID }
    console.log(bulkStuff)
    window.nmos.route({bulkStuff: bulkStuff})
      .then(() => {
        console.log('Back in dispatcher')
        actions.deployBulkRoute({bulkChanges})
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
