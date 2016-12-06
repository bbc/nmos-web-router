import Routables from '../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let view = Object.assign({}, state.view, routables.view())
  if (action.name === 'view') return merge({view})
  let updatedView = routables
    .update[action.name](action.update[action.name])
    .filter(state.view.choose.term)
    .view()
  view = Object.assign({}, state.view, updatedView)
  return merge({view})
}
