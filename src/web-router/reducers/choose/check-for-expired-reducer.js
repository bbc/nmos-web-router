import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  routables.expire.check()
  let updatedView = routables.expire.delete().view()
  let view = Object.assign({}, state.view, updatedView)
  return merge({view})
}
