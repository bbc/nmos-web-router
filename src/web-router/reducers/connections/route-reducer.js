export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  let connections = view.connections
  connections.routables.receivers = connections.routables.receivers.map(routable => {
    if (routable.id === action.receiver.id) routable.node.state = 'routed'
    return routable
  })

  connections.routables.left = connections.routables.left.map(routable => {
    if (routable.id === action.sender.id) routable.node.state = 'routed'
    return routable
  })
  return merge({ view })
}
