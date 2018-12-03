export default (state, action, merge) => {
  console.log('REDUCER IS TRIGGERED')
  console.log(state)
  console.log(action)
  console.log(merge)
  let view = Object.assign({}, state.view)
  clearTimeout(view.notifications.timeout)
  view.notifications.state = 'alert'
  view.notifications.message = action.message
  view.notifications.type = 'alert'
  return merge({view})
}
