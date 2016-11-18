import ChangeState from '../change-state'

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.receivers = view.receivers.map(routable => {
    let changeState = ChangeState(routable)
    if (routable.id === action.receiver.id) changeState.unrouting()
    return routable
  })
  return merge({ view })
}
