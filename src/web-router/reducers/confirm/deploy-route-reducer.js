import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let updatedView = routables.deployChange(action.receiver.id, action.sender.id, 'route').view()
  let view = Object.assign({}, state.view, updatedView)

  // Set change state to deployed so that it fades out and can be removed from the list
  // of changes
  let updatedChanges = state.data.changes
  updatedChanges.forEach(change => {
    if (change.receiver.id === action.rID) {
      change.state = 'deployed'
    }
  })

  let data = {
    changes: updatedChanges
  }

  let newState = {
    data: data,
    view: view
  }

  return merge({newState})
}
