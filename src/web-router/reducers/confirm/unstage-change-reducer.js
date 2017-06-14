export default (state, action, merge) => {
  let updatedChanges = state.data.changes
  updatedChanges.forEach(change => {
    if (change.receiver.id === action.rID) {
      change.state = 'unstaged'
    }
  })
  let data = {
    changes: updatedChanges
  }
  return merge({data})
}
