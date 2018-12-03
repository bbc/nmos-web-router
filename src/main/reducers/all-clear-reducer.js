export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  clearTimeout(view.notifications.timeout)
  view.notifications.state = 'none'
  view.notifications.message = 'message timeout'
  view.notifications.type = 'info'
  return merge({view})
}
