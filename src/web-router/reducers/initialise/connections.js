function isRouted (type, routes, routable) {
  return routes.filter(route => {
    return route[type].id === routable.id
  }).length > 0
}

function mapRoutables (data, routes, sides, side, defaultState) {
  return data[sides[side].plural].map(routable => {
    routable.state = defaultState
    routable.node = {
      status: isRouted(sides[side].singular, routes, routable) ? 'routed' : 'unrouted'
    }
    return routable
  })
}

export default (data, view, sides) => {
  let connections = Object.assign({}, view.connections)
  connections.routes = Object.assign([], data.routes)
  connections.routables.left = mapRoutables(data, connections.routes, sides, 'left', 'contracted selectable')
  connections.routables.right = mapRoutables(data, connections.routes, sides, 'right', 'contracted')
  return connections
}
