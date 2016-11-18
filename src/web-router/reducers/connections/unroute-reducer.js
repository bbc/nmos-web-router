import ChangeState from '../change-state'

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.receivers = view.receivers.map(receiver => {
    let changeState = ChangeState(receiver)
    if (receiver.id === action.receiver.id) {
      changeState.unrouting()
      let sender = receiver.subscription.routed
      let matched = receiver.subscription.unrouting.filter(sender => {
        return sender.id === sender.id
      })[0]
      if (matched === undefined) receiver.subscription.unrouting = [].concat(receiver.subscription.unrouting, [sender])
    }
    return receiver
  })
  return merge({ view })
}
