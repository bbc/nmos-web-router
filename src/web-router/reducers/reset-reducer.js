import updateConnections from './update-connections-reducer'

function isRouted (data, routable, type) {
  return data.routes
    .filter(route => {
      return route[type].id === routable.id
    }).length > 0
}

function getConnectionRoutables (data, type, singularType) {
  return data[type].map(routable => {
    return {
      id: routable.id,
      routable: false,
      routed: isRouted(data, routable, singularType),
      preview: false,
      contracted: true,
      format: routable.format
    }
  })
}

function getConfirmatonRoutes (routes) {
  return routes.map(route => {
    return {
      sender: {
        id: route.sender.id,
        label: route.sender.label,
        descripton: route.sender.descripton,
        format: route.sender.format,
        contracted: true
      },
      receiver: {
        id: route.receiver.id,
        label: route.receiver.label,
        descripton: route.receiver.descripton,
        format: route.receiver.format,
        contracted: true
      }
    }
  })
}

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.connections.senders = getConnectionRoutables(state.data, 'senders', 'sender')
  view.connections.receivers = getConnectionRoutables(state.data, 'receivers', 'receiver')
  view.connections.routes = state.data.routes.map(route => {
    return {
      left: {
        id: route[state.sides.left.singular].id
      },
      right: {
        id: route[state.sides.right.singular].id
      }
    }
  })
  view.confirmation.routes = getConfirmatonRoutes(state.data.routes)
  let newState = merge({ view })
  return updateConnections(newState, action, merge)
}
