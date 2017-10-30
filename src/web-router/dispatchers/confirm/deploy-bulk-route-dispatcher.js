/*
Extract the sender for each routing change (or use null if it is an unrouting change)
Pass the arrays of senders and corresponding receiver IDs to the routing API, along with
  the device id of the bulk device in question
*/

import dispatchError from '../error-dispatcher'

export default (actions) => {
  return (senders, bulkChanges, deviceID) => {
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
    window.nmos.route({bulkStuff: bulkStuff})
      .then(() => {
        actions.deployBulkRoute({bulkChanges})
      })
      .catch((error) => {
        dispatchError(actions)(error)
      })
  }
}
