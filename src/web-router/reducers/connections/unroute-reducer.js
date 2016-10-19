export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  let connections = view.connections
  connections.routables.right = connections.routables.right.map(routable => {
    if (routable.id === action.routable.id) routable.node.state = 'remove'
    return routable
  })
  merge({ view })
}
