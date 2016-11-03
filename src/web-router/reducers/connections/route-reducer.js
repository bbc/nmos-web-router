export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.receivers = view.receivers.map(routable => {
    if (routable.id === action.receiver.id) routable.node.state = 'routed'
    return routable
  })
  view.senders = view.senders.map(routable => {
    if (routable.id === action.sender.id) routable.node.state = 'routed'
    return routable
  })
  return merge({ view })
}
