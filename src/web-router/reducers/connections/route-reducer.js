import ChangeState from '../change-state'

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.receivers = view.receivers.map(routable => {
    Object.assign({}, routable)
    let changeState = ChangeState(routable)
    if (routable.id === action.receiver.id) changeState.route()
    return routable
  })
  view.senders = view.senders.map(routable => {
    Object.assign({}, routable)
    let changeState = ChangeState(routable)
    if (routable.id === action.sender.id) changeState.route()
    return routable
  })
  let changeState = ChangeState(view.expandedSender)
  changeState.route()
  return merge({ view })
}
