import ChangeState from '../change-state'

function unique (senders) {
  let arr = []
  senders.forEach(sender => {
    let matched = arr.filter(a => {
      return a.id === sender.id
    })[0]
    if (matched === undefined) arr.push(sender)
  })
  return arr
}

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.receivers = view.receivers.map(receiver => {
    let changeState = ChangeState(receiver)
    if (receiver.id === action.receiver.id) {
      changeState.unrouting()
      let routed = receiver.subscription.routed
      if (routed) {
        delete receiver.subscription.routed
        receiver.subscription.unrouting = receiver.subscription.unrouting.concat([routed])
      }
      receiver.subscription.unrouting = receiver.subscription.unrouting.concat(receiver.subscription.routing)
      receiver.subscription.routing = []
      receiver.subscription.unrouting = unique(receiver.subscription.unrouting)
    }
    return receiver
  })
  return merge({ view })
}
