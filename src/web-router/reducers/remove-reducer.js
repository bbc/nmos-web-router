import updateConnections from './update-connections-reducer'

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  let connectionsRouteIndex
  view.connections.routes.forEach((route, index) => {
    if (route.left.id === action[state.sides.left.singular].id && route.right.id === action[state.sides.right.singular].id) connectionsRouteIndex = index
  })
  if (connectionsRouteIndex >= 0) view.connections.routes.splice(connectionsRouteIndex, 1)

  let confirmationRouteIndex
  view.confirmation.routes.forEach((route, index) => {
    if (route[state.sides.left.singular].id === action[state.sides.left.singular].id && route[state.sides.right.singular].id === action[state.sides.right.singular].id) confirmationRouteIndex = index
  })
  if (confirmationRouteIndex >= 0) view.confirmation.routes.splice(confirmationRouteIndex, 1)

  let removedState = merge({ view })
  return updateConnections(removedState, action, merge)
}
