function changeContracted (view, action) {
  let allContracted = true
  view[action.viewName][action.viewType] = view[action.viewName][action.viewType].map(routable => {
    routable.routable = true
    if (routable.id === action.id) {
      view[action.viewName].toggled = routable
      routable.contracted = !routable.contracted
      allContracted = routable.contracted
    } else routable.contracted = true
    return routable
  })
  return allContracted
}

function changeRoutable (state, view, action) {
  let side = state.sides[action.viewType]
  let opposite = state.sides[side].opposite.plural
  view[action.viewName][opposite] = view[action.viewName][opposite].map(routable => {
    if (view[action.viewName].toggled && !view[action.viewName].toggled.contracted) routable.routable = view[action.viewName].toggled.format !== 'no' && routable.format === view[action.viewName].toggled.format
    else routable.routable = true
    return routable
  })
}

function toggle (state, view, action) {
  let allContracted = changeContracted(view, action)
  changeRoutable(state, view, action)
  return allContracted
}

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)

  let nothingExpanded = view[action.viewName].toggleSide === ''
  let sameSide = view[action.viewName].toggleSide === action.viewType

  if (nothingExpanded) {
    toggle(state, view, action)
    view[action.viewName].toggleSide = action.viewType
  } else if (sameSide) {
    let allContracted = toggle(state, view, action)
    if (allContracted) view[action.viewName].toggleSide = ''
  } else if (!sameSide && action.id !== 'off') {
    let side = state.sides[action.viewType]
    let sideName = state.sides[side].plural

    let routable = view[action.viewName][sideName].filter(routable => {
      return routable.id === action.id
    })[0]

    let route = {
      status: 'user'
    }

    route[side] = routable
    route[state.sides[side].opposite.name] = view[action.viewName].toggled

    view[action.viewName].routes.push(route)
  }

  if (action.id === 'off') view[action.viewName].toggleSide = ''

  view.scroll = false
  return merge({ view })
}
