import dispatchError from '../error-dispatcher'

export default (actions) => {
  return (sender, receiver) => {
    sender = Object.assign({}, sender)
    delete sender.format
    delete sender.state
    delete sender.stateString
    window.nmos.route(receiver.id, sender)
      .then(() => {
        let rID = receiver.id
        actions.deployRoute({ receiver, sender, rID })
      })
      .catch(error => {
        if (error.message === 'Network Error') error = `Can not connect to server, can not route ${sender.label} to ${receiver.label}`
        dispatchError(actions)(error)
      })
  }
}
