import Routables from '../../routables'
import allVisible from './all-visible'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let allVisibleState = allVisible(routables.view()[action.routableType])
  let view = Object.assign({}, state.view)
  let choose = view.choose
  choose.allVisibleState[action.routableType] = allVisibleState.to
  routables.check[action.routableType](allVisibleState.to)
  view = Object.assign({}, view, routables.view())
  return merge({ view })
}
