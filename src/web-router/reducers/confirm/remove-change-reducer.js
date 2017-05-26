export default (state, action, merge) => {
  let newChanges = state.data.changes
  newChanges.splice(action.index, 1)
  let data = {
    receivers: state.data.receivers,
    senders: state.data.senders,
    flows: state.data.flows,
    changes: newChanges
  }
  return merge({data})
}
