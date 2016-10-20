export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  let connections = view.connections
  connections.routables.right = connections.routables.right.map(routable => {
    if (routable.id === action.routable.id) routable.node.state = 'routed'
    return routable
  })

  connections.routables.left = connections.routables.left.map(routable => {
    if (routable.id === action.leftRoutable.id) routable.node.state = 'routed'
    return routable
  })
  return merge({ view })
}
