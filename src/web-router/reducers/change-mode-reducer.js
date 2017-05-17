export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  if (view.routingMode === 'automatic') {
    view.routingMode = 'manual'
  } else {
    view.routingMode = 'automatic'
  }
  view = Object.assign({}, view)
  return merge({ view })
}
