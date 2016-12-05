import Routables from '../../routables'
import allVisible from './all-visible'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let updatedView = routables
    .check[action.routableType](action.routable.id)
    .view()

  let view = Object.assign({}, state.view, updatedView)
  let allVisibleState = allVisible(routables.view()[action.routableType])
  view.choose.allVisibleState[action.routableType] = allVisibleState.current
  return merge({view})
}
