export default (state, action, merge) => {
  let currentChanges = state.data.changes
  // let editedChanges = currentChanges.filter(change => {
  //   return change.receiver.id !== action.rID
  // })
  let indexToSplice = 0
  currentChanges.forEach((change, index) => {
    if (change.receiver.id === action.rID) {
      indexToSplice = index
    }
  })
  currentChanges.splice(indexToSplice, 1)
  let data = {
    receivers: state.data.receivers,
    senders: state.data.senders,
    flows: state.data.flows,
    changes: currentChanges
  }
  return merge({data})
}
