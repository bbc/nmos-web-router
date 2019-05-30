export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.loggedIn = true
  return merge({view})
}
