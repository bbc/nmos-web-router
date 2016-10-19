function isRouted (side, routes, routable) {
  return routes.filter(route => {
    return route[side].id === routable.id
  }).length > 0
}

function defaultRoutable (side, routes, routable) {
  routable.state = 'contracted'
  routable.node = {
    status: isRouted(side, routes, routable) ? 'routed' : 'unrouted'
  }
  return routable
}

function mapRoutables (data, routes, sides, side) {
  return data[sides[side].plural].map(routable => {
    return defaultRoutable(sides[side].singular, routes, routable)
  })
}

export default (data, view, sides) => {
  let connections = Object.assign({}, view.connections)
  connections.routes = Object.assign([], data.routes)
  connections.routables.left = mapRoutables(data, connections.routes, sides, 'left')
  connections.routables.right = mapRoutables(data, connections.routes, sides, 'right')
  return connections
}
