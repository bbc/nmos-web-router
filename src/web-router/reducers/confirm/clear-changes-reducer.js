export default (state, action, merge) => {
  let newChanges = []
  let data = {
    receivers: state.data.receivers,
    senders: state.data.senders,
    flows: state.data.flows,
    changes: newChanges
  }
  return merge({data})
}
