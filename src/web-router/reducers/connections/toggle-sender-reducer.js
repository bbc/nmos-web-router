function getLeftState (toggled, expanding, routable) {
  let state = 'contracted'
  let isBeingToggled = routable.id === toggled.id
  if (expanding && isBeingToggled) state = 'expanded'
  else if (expanding) state = 'other'
  return `${state} selectable`
}

function getRightState (toggled, expanding, routable) {
  let state = 'contracted'
  if (toggled.format !== routable.format && expanding) state = 'disabled'
  else if (expanding) return `${state} selectable`
  return state
}

export default (state, action, merge) => {
  let toggled = Object.assign({}, action.routable)
  let expanding = !toggled.state.includes('expanded')

  let view = Object.assign({}, state.view)
  let connections = view.connections

  connections.routables.left = connections.routables.left.map(routable => {
    let state = getLeftState(toggled, expanding, routable)
    return Object.assign({}, routable, { state })
  })

  connections.routables.receivers = connections.routables.receivers.map(routable => {
    let state = getRightState(toggled, expanding, routable)
    return Object.assign({}, routable, { state })
  })

  return merge({ view })
}
