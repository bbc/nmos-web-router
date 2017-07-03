import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let updatedView = routables.stageChange(action.sender.id, action.receiver.id, action.changeType).view()
  let view = Object.assign({}, state.view, updatedView)

  return merge({view})
}