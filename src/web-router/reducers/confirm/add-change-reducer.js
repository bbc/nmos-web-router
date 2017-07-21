import Routables from '../../routables'

export default (state, action, merge) => {
  let updatedView = ''

  // Check to make sure the user is not routing a receiver that is already subscribed
  // to the sender. If this is the case then do nothing.
  if (!(action.receiver.subscription.sender_id === action.sender.id && action.changeType === 'route')) {
    let routables = Routables(state.view)
    updatedView = routables.stageChange(action.sender.id, action.receiver.id, action.changeType).view()
  }
  let view = Object.assign({}, state.view, updatedView)

  return merge({view})
}
