import dispatchError from '../error-dispatcher'

export default (actions) => {
  return (receiver) => {
    window.nmos.unroute(receiver.id)
      .then(() => {
        actions.unroute({ receiver })
      })
      .catch(error => {
        if (error.message === 'Network Error') error = `Can not connect to server, can not unroute ${receiver.label}`
        dispatchError(actions)(error)
      })
  }
}
