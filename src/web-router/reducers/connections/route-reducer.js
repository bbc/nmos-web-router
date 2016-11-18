import ChangeState from '../change-state'

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.receivers = view.receivers.map(routable => {
    Object.assign({}, routable)
    let changeState = ChangeState(routable)
    if (routable.id === action.receiver.id) changeState.route()
    let sender = Object.assign({}, routable.subscription.routed)

    let matched = routable.subscription.routing.filter(r => {
      return r.id === sender.id
    })[0]
    if (matched === undefined) [].concat(routable.subscription.routing, [sender])

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
