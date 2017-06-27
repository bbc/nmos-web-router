/*
Remove all changes with the state specified in targetState
  This will be either 'deployed' changes or 'unstaged' changes
*/

export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  view.changes = view.changes.filter(change => {
    return change.state !== action.targetState
  })

  return merge({view})
}
