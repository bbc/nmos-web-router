function getSenderState (toggled, expanding, sender) {
  let state = 'contracted'
  let isBeingToggled = sender.id === toggled.id
  if (expanding && isBeingToggled) state = 'expanded'
  else if (expanding) state = 'other'
  return `${state} selectable`
}

function getReceiverState (toggled, expanding, receiver) {
  let state = 'contracted'
  if (toggled.format !== receiver.format && expanding) state = 'disabled'
  else if (expanding) return `${state} selectable`
  return state
}

export default (state, action, merge) => {
  let toggled = Object.assign({}, action.sender)
  let expanding = !toggled.state.includes('expanded')

  let view = Object.assign({}, state.view)
  let connections = view.connections

  connections.expandedSender = { state: 'contracted', node: {} }
  view.senders = view.senders.map(sender => {
    let state = getSenderState(toggled, expanding, sender)
    let updatedSender = Object.assign({}, sender, { state })
    if (state.includes('expanded')) connections.expandedSender = updatedSender
    return updatedSender
  })

  view.receivers = view.receivers.map(receiver => {
    let state = getReceiverState(toggled, expanding, receiver)
    return Object.assign({}, receiver, { state })
  })

  return merge({ view })
}
