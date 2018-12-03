export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  clearTimeout(view.notifications.timeout)
  view.notifications.state = 'info'
  view.notifications.message = action.message
  view.notifications.type = 'info'
  return merge({view})
}
