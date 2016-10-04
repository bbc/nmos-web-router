export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view[action.viewName][action.viewType] = view[action.viewName][action.viewType].map(routable => {
    if (routable.id === action.id) routable.contracted = !routable.contracted
    return routable
  })
  view.scroll = false
  return merge({ view })
}
