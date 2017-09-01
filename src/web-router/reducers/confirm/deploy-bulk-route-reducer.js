import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let updatedView = state.view

  action.bulkChanges.forEach(change => {
    updatedView = routables.deployChange(
      change.sender.id,
      change.receiver.id,
      change.type,
      change.subscriptionID
    ).view()
  })

  let view = Object.assign({}, state.view, updatedView)

  return merge({view})
}
