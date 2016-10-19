function defaultRoutable (routable) {
  routable.state = 'contracted'
  routable.node = {
    status: 'unrouted',
    deletable: false,
    visible: true
  }
  return routable
}


export default (data, view, sides) => {
  let connections = Object.assign({}, view.connections)
  connections.routes = Object.assign([], data.routes)

  connections.routables.left = data[sides.left.plural].map(defaultRoutable)
  connections.routables.right = data[sides.right.plural].map(defaultRoutable)

  return connections
}
