export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  return merge({view})
}
