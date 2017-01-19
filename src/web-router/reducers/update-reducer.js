import Routables from '../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let view = Object.assign({}, state.view, routables.view())
  if (action.name === 'view') return merge({view})
  routables.update[action.name](action.update[action.name])
  routables.filter(state.view.choose.term)
  let updatedView = routables.view()
  view = Object.assign({}, state.view, updatedView)
  return merge({view})
}
