function routedState (side, routes, routable) {
  return routes.filter(route => {
    return route[side].id === routable.id
  }).length > 0 ? 'routed' : 'unrouted'
}

function mapRoutables (data, routes, sides, side, defaultState) {
  return data[sides[side].plural].map(routable => {
    routable.state = defaultState
    routable.node = {
      status: routedState(side, routes, routable)
    }
    return routable
  })
}

export default (data, view, sides) => {
  let connections = Object.assign({}, view.connections)
  connections.routes = data.routes.map(route => {
    route = Object.assign({}, route)
    route.left = route.sender
    route.right = route.receiver
    return route
  })
  connections.routables.left = mapRoutables(data, connections.routes, sides, 'left', 'contracted selectable')
  connections.routables.right = mapRoutables(data, connections.routes, sides, 'right', 'contracted')
  return connections
}
