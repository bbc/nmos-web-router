export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.routesEl = action.routesEl
  return merge({view})
}
