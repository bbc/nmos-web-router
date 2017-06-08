import dispatchError from '../error-dispatcher'

export default (actions) => {
  return (sender, receiver) => {
    window.nmos.unroute(receiver.id)
      .then(() => {
        actions.deployUnroute({ sender, receiver })
      })
      .catch(error => {
        if (error.message === 'Network Error') error = `Can not connect to server, can not unroute ${receiver.label}`
        dispatchError(actions)(error)
      })
  }
}
