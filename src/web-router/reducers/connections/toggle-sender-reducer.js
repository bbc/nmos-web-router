import ChangeState from '../change-state'

export default (state, action, merge) => {
  let toggled = Object.assign({}, action.sender)
  let expanding = !toggled.state.includes('expanded')

  let view = Object.assign({}, state.view)
  let connections = view.connections

  let changeExpandedSenderState = ChangeState(connections.expandedSender)
  changeExpandedSenderState.contract()
  view.senders = view.senders.map(sender => {
    let changeState = ChangeState(sender)
    changeState.contract().selectable().notOther()
    let isBeingToggled = sender.id === toggled.id
    if (expanding && isBeingToggled) changeState.expand()
    else if (expanding) changeState.other()
    let updatedSender = Object.assign({}, sender)
    if (sender.state.includes('expanded')) connections.expandedSender = updatedSender
    return updatedSender
  })

  view.receivers = view.receivers.map(receiver => {
    let changeState = ChangeState(receiver)
    changeState.contract().enable().notSelectable()
    if (toggled.format !== receiver.format && expanding) changeState.disable()
    else if (expanding) changeState.selectable()
    return receiver
  })

  return merge({ view })
}
