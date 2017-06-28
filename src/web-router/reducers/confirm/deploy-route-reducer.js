import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let updatedView = routables.deployChange(action.sender.id, action.receiver.id, 'route', action.subscriptionID).view()
  let view = Object.assign({}, state.view, updatedView)

  return merge({view})
}
