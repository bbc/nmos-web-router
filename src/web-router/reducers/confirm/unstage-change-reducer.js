export default (state, action, merge) => {
  let updatedChanges = state.data.changes
  updatedChanges.forEach(change => {
    if (change.receiver.id === action.rID) {
      change.state = 'unstaged'
    }
  })
  let data = {
    receivers: state.data.receivers,
    senders: state.data.senders,
    flows: state.data.flows,
    changes: updatedChanges
  }
  return merge({data})
}
