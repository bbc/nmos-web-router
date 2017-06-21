export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.changes = view.changes.filter(change => {
    return !(change.receiver.id === action.rID)
  })
  return merge({view})
}
