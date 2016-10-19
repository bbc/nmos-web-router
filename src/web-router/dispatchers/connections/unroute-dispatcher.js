export default (actions) => {
  return (routable) => {
    window.nmos.unroute(routable.id, routable.sender)
    actions.unroute({ routable })
  }
}
