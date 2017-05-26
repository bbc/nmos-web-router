export default (state, action, merge) => {
  console.log('Hello?')
  let oneChange = {sender: action.sender, receiver: action.receiver, type: action.changeType, state: 'staged'}
  let newChanges = state.data.changes
  console.log('In reducer')
  console.log(oneChange)
  newChanges.push(oneChange)
  let data = {
    receivers: state.data.receivers,
    senders: state.data.senders,
    flows: state.data.flows,
    changes: newChanges
  }
  return merge({data})
}
