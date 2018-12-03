export default (state, action, merge) => {
  let updatedView = action.response
  let view = Object.assign({}, state.view, updatedView)
  return merge({view})
}
