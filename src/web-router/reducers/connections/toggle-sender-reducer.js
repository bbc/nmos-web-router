import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let data
  if (action.sender.state.includes('contracted')) data = routables.expand(action.sender.id).view()
  else data = routables.contract().view()

  let view = Object.assign({}, state.view, data)
  return merge({view})
}
