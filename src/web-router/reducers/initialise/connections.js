function defaultLeftRoutable (routable) {
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

  connections.routables.left = data[sides.left.plural].map(defaultLeftRoutable)
  connections.routables.right = Object.assign([], data[sides.right.plural])

  return connections
}
