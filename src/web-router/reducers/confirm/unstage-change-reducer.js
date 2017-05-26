export default (state, action, merge) => {
  let newChanges = state.data.changes
  newChanges[action.index].state = 'unstaged'
  let data = {
    receivers: state.data.receivers,
    senders: state.data.senders,
    flows: state.data.flows,
    changes: newChanges
  }
  return merge({data})
}
