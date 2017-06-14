import Routables from '../../routables'

export default (state, action, merge) => {
  let view = state.view

  // This reducer is called either when a single change is removed via its delete button
  // Or a change is removed after being deployed
  // In the former case, unstage the change and return routables to their previous state
  if (!action.deployed) {
    let routables = Routables(state.view)
    let updatedView = routables.unstageChange(action.rID, action.sID, action.changeType).view()
    view = Object.assign({}, state.view, updatedView)
  }

  // Remove the change from the list of changes and then merge
  let updatedChanges = state.data.changes
  let indexToSplice = 0
  updatedChanges.forEach((change, index) => {
    if (change.receiver.id === action.rID) {
      indexToSplice = index
    }
  })
  updatedChanges.splice(indexToSplice, 1)

  let data = {
    changes: updatedChanges
  }
  let newState = {
    data: data,
    view: view
  }
  return merge({newState})
}
