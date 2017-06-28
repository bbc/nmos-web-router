/*
Using the sender ID to get the most up-to-date version of the sender
  avoids problems caused by a sender being removed and then coming back online
  while a change is staged (resulting in the change holding an out-of-date copy
  of the sender)
*/

import dispatchError from '../error-dispatcher'

export default (actions) => {
  return (senders, senderID, receiver, subscriptionID) => {
    let sender = senders.filter(sender => {
      return sender.id === senderID
    })[0]
    sender = Object.assign({}, sender)
    delete sender.format
    delete sender.state
    delete sender.stateString
    window.nmos.route(receiver.id, sender)
      .then(() => {
        actions.deployRoute({ sender, receiver, subscriptionID })
      })
      .catch(error => {
        if (error.message === 'Network Error') error = `Can not connect to server, can not route ${sender.label} to ${receiver.label}`
        dispatchError(actions)(error)
      })
  }
}
