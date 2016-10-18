export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.confirmation.routes[action.index][action.side].contracted = !view.confirmation.routes[action.index][action.side].contracted
  view.scroll = false
  return merge({view})
}
