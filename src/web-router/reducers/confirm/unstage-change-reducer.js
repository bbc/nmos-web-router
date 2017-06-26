import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let updatedView = routables.unstageChange(action.rID, action.sID, action.changeType, action.oldSenderID).view()
  let view = Object.assign({}, state.view, updatedView)

  return merge({view})
}
