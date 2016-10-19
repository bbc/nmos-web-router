function getState (toggled, isNotCurrentlyExpanded, routable) {
  let state = 'contracted'
  let isBeingToggled = routable.id === toggled.id
  if (isNotCurrentlyExpanded && isBeingToggled) state = 'expanded'
  else if (isNotCurrentlyExpanded) state = 'other'
  return `${state} selectable`
}

export default (state, action, merge) => {
  let toggled = Object.assign({}, action.routable)
  let isNotCurrentlyExpanded = !toggled.state.includes('expanded')

  let view = Object.assign({}, state.view)
  let connections = view.connections

  connections.routables.left = connections.routables.left.map(routable => {
    let state = getState(toggled, isNotCurrentlyExpanded, routable)
    return Object.assign({}, routable, { state })
  })

  return merge({ view })
}
