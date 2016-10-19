function getLeftState (toggled, isNotCurrentlyExpanded, routable) {
  let state = 'contracted'
  let isBeingToggled = routable.id === toggled.id
  if (isNotCurrentlyExpanded && isBeingToggled) state = 'expanded'
  else if (isNotCurrentlyExpanded) state = 'other'
  return `${state} selectable`
}

function getRightState (toggled, isNotCurrentlyExpanded, routable, routes) {
  let state = 'contracted'

  let isRouted = routes.filter(route => {
    let isToggled = route.left.id === toggled.id
    let isRoutable = route.right.id === routable.id
    return isToggled && isRoutable
  }).length > 0

  if (!isRouted && isNotCurrentlyExpanded) state = 'disabled'

  return state
}

export default (state, action, merge) => {
  let toggled = Object.assign({}, action.routable)
  let isNotCurrentlyExpanded = !toggled.state.includes('expanded')

  let view = Object.assign({}, state.view)
  let connections = view.connections

  connections.routables.left = connections.routables.left.map(routable => {
    let state = getLeftState(toggled, isNotCurrentlyExpanded, routable)
    return Object.assign({}, routable, { state })
  })

  connections.routables.right = connections.routables.right.map(routable => {
    let state = getRightState(toggled, isNotCurrentlyExpanded, routable, connections.routes)
    return Object.assign({}, routable, { state })
  })

  return merge({ view })
}
