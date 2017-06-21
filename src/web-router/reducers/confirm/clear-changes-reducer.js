export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.changes = view.changes.filter(change => {
    return change.state !== action.targetState
  })

  return merge({view})
}
