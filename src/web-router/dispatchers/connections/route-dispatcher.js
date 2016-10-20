export default (actions) => {
  return (routable, leftRoutables) => {
    let leftRoutable = leftRoutables.filter(routable => {
      return routable.state.includes('expanded')
    })[0]
    actions.route({ routable, leftRoutable })
    window.nmos.route(routable.id, leftRoutable)
  }
}
