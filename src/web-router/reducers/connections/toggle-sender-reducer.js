import ChangeState from '../change-state'

function contract (state, action, merge) {
  let view = Object.assign({}, state.view)
  let changeState = ChangeState(view.expandedSender)
  changeState.contract()

  delete view.expandedSender.label
  delete view.expandedSender.description
  delete view.expandedSender.format

  view.senders = view.senders.map(sender => {
    sender = Object.assign({}, sender)
    let changeState = ChangeState(sender)
    changeState.contract()
    return sender
  })

  view.receivers = view.receivers.map(receiver => {
    let changeState = ChangeState(receiver)
    changeState.enable().notSelectable()
    return receiver
  })

  return merge({view})
}

function expand (state, action, merge) {
  let view = Object.assign({}, state.view)
  let changeExpandedSenderState = ChangeState(view.expandedSender)
  changeExpandedSenderState.expand()

  let toggled = Object.assign({}, action.sender)

  view.senders = view.senders.map(sender => {
    sender = Object.assign({}, sender)
    let changeState = ChangeState(sender)
    if (sender.id === toggled.id) {
      view.expandedSender.id = sender.id
      view.expandedSender.label = sender.label
      view.expandedSender.description = sender.description
      view.expandedSender.format = sender.format
      changeState.expand()

      if (sender.node.state.includes('routed')) changeExpandedSenderState.route()
      else changeExpandedSenderState.unroute()
    } else changeState.contract()
    return sender
  })

  view.receivers = view.receivers.map(receiver => {
    let changeState = ChangeState(receiver)
    if (toggled.format !== receiver.format) changeState.disable().notSelectable()
    else changeState.enable().selectable()
    return receiver
  })

  return merge({view})
}

export default (state, action, merge) => {
  if (action.sender.id === state.view.expandedSender.id) return contract(state, action, merge)
  else return expand(state, action, merge)
}
