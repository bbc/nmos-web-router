export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  let connections = view.connections
  connections.routables.right = connections.routables.right.map(routable => {
    if (routable.id === action.receiver.id) routable.node.state = 'remove'
    return routable
  })
  return merge({ view })
}
