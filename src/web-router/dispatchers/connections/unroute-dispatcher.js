import dispatchError from '../error-dispatcher'

export default (actions) => {
  return (receiver) => {
    window.nmos.unroute({sender: '', id: receiver.id})
      .then(() => {
        actions.unroute({ receiver })
      })
      .catch(error => {
        if (error.message === 'Network Error') error = `Unable to connect to server, cannot unroute ${receiver.label}`
        dispatchError(actions)(error)
      })
  }
}
