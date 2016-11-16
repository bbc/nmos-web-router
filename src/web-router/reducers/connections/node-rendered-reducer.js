export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view[action.routableType].map(routable => {
    if (routable.id === action.routable.id) routable.nodeEl = action.nodeEl
    return routable
  })
  return merge({view})
}
