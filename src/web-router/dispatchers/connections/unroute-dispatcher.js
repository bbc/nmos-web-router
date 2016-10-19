export default (actions) => {
  return (routable) => {
    actions.unroute({ routable })
    window.nmos.unroute(routable.id, routable.sender)
  }
}
