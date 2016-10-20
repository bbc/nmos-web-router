export default (actions) => {
  return (receiver) => {
    actions.unroute({ receiver })
    window.nmos.unroute(receiver.id)
  }
}
