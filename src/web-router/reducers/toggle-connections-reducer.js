export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  let toggled
  view[action.viewName][action.viewType] = view[action.viewName][action.viewType].map(routable => {
    routable.dropable = true
    if (routable.id === action.id) {
      toggled = routable
      routable.contracted = !routable.contracted
    } else routable.contracted = true
    return routable
  })


  let side = state.sides[action.viewType]
  let opposite = state.sides[side].opposite.plural
  view[action.viewName][opposite] = view[action.viewName][opposite].map(routable => {
    if (!toggled.contracted) routable.dropable = routable.format === toggled.format
    else routable.dropable = true
    return routable
  })

  view.scroll = false
  return merge({ view })
}
