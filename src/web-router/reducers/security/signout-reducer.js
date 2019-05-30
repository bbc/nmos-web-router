export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.loggedIn = false
  return merge({view})
}
