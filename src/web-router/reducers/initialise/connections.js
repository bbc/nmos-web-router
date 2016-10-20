function routedState (side, routes, routable) {
  return routes.filter(route => {
    return route[side].id === routable.id
  }).length > 0 ? 'routed' : 'unrouted'
}

function mapRoutables2 (data, routes, type, routeSide, defaultState) {
  return data[type].map(routable => {
    routable.state = defaultState
    routable.node = {
      state: routedState(routeSide, routes, routable)
    }
    return routable
  })
}

export default (data, view, sides) => {
  let connections = Object.assign({}, view.connections)
  connections.routes = data.routes.map(route => {
    route = Object.assign({}, route)
    return route
  })
  connections.routables.senders = mapRoutables2(data, connections.routes, 'senders', 'sender', 'contracted selectable')
  connections.routables.receivers = mapRoutables2(data, connections.routes, 'receivers', 'receiver', 'contracted')
  return connections
}
