import dispatchError from '../error-dispatcher'

export default (actions) => {
  return (receiver, index) => {
    window.nmos.unroute(receiver.id)
      .then(() => {
        // actions.unroute({ receiver })
        let changeIndex = index
        console.log(index)
        actions.deployUnroute({ receiver, changeIndex })
      })
      .catch(error => {
        if (error.message === 'Network Error') error = `Can not connect to server, can not unroute ${receiver.label}`
        dispatchError(actions)(error)
      })
  }
}
