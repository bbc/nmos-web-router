import dispatchError from '../error-dispatcher'

export default (actions) => {
  return (sender, receiver) => {
    window.nmos.unroute(receiver.id)
      .then(() => {
        actions.deployUnroute({ sender, receiver })
      })
      .catch(error => {
        if (error.message === 'Network Error') error = `Unable to connect to server, cannot unroute ${receiver.label}`
        dispatchError(actions)(error)
      })
  }
}
