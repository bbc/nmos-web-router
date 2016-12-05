import Routables from '../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let updatedView = routables
    .update[action.name](action.update[action.name])
    .filter(state.view.choose.term)
    .view()
  let view = Object.assign({}, state.view, updatedView)
  return merge({ view })
}
