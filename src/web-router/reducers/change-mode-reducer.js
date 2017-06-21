export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.routingMode = (view.routingMode === 'automatic') ? 'manual' : 'automatic'
  return merge({ view })
}
