import ChangeState from '../change-state'
import routes from '../update/routes'

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
    Object.assign({}, receiver)
    let changeState = ChangeState(receiver)
    if (receiver.id === action.receiver.id) {
      changeState.route()

      if (receiver.subscription.routed) receiver.subscription.unrouting.push(receiver.subscription.routed)
      delete receiver.subscription.routed

      receiver.subscription.routing.push(action.sender)

      if (receiver.subscription.unrouting.length > 0) {
        let unrouting = []
        receiver.subscription.unrouting.forEach(unroutingSender => {
          let mySender = unroutingSender
          receiver.subscription.routing.forEach(routingSender => {
            if (routingSender.id === unroutingSender.id) mySender = null
          })
          if (mySender !== null) unrouting.push(mySender)
        })
        receiver.subscription.unrouting = unrouting
      }

      receiver.subscription.routing = unique(receiver.subscription.routing)
      receiver.subscription.unrouting = unique(receiver.subscription.unrouting)
    }
    return receiver
  })
  view.senders = view.senders.map(sender => {
    Object.assign({}, sender)
    let changeState = ChangeState(sender)
    if (sender.id === action.sender.id) changeState.route()
    return sender
  })
  let changeState = ChangeState(view.expandedSender)
  changeState.route()
  view.routes = routes(view)
  return merge({ view })
}
