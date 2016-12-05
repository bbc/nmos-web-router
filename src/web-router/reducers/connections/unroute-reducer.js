import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let updatedView = routables.unroute(action.receiver.id).view()
  let view = Object.assign({}, state.view, updatedView)
  return merge({view})
}
