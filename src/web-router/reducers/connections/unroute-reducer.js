export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.receivers = view.receivers.map(routable => {
    if (routable.id === action.receiver.id) routable.node.state = 'remove'
    return routable
  })
  return merge({ view })
}
