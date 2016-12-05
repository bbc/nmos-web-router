import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  if (action.sender.state.includes('contracted')) routables.expand(action.sender.id)
  else routables.contract()

  let view = Object.assign({}, state.view, routables.view())
  return merge({view})
}
