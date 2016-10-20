export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  let connections = view.connections
  connections.receivers = connections.receivers.map(routable => {
    if (routable.id === action.receiver.id) routable.node.state = 'routed'
    return routable
  })

  connections.senders = connections.senders.map(routable => {
    if (routable.id === action.sender.id) routable.node.state = 'routed'
    return routable
  })
  return merge({ view })
}
