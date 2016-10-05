function changeContracted (view, action) {
  view[action.viewName][action.viewType] = view[action.viewName][action.viewType].map(routable => {
    routable.routable = true
    if (routable.id === action.id) {
      view[action.viewName].toggled = routable
      routable.contracted = !routable.contracted
    } else routable.contracted = true

    return routable
  })
}

function changeRoutable (state, view, action) {
  let side = state.sides[action.viewType]
  let opposite = state.sides[side].opposite.plural
  view[action.viewName][opposite] = view[action.viewName][opposite].map(routable => {
    if (!view[action.viewName].toggled.contracted) routable.routable = routable.format === view[action.viewName].toggled.format
    else routable.routable = true
    return routable
  })
}

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)

  if (view[action.viewName].toggleSide === '' || view[action.viewName].toggleSide === action.viewType) {
    changeContracted(view, action)
    changeRoutable(state, view, action)
  }

  if (view[action.viewName].toggleSide === '') view[action.viewName].toggleSide = action.viewType
  else if (view[action.viewName].toggleSide === action.viewType) view[action.viewName].toggleSide = ''
  else console.log('create route', view[action.viewName].toggled.id, action.id)

  view.scroll = false
  return merge({ view })
}
