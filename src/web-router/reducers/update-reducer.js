import Routables from '../routables'
import allVisible from './choose/all-visible'
import reAddChanges from '../re-add-changes'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let view = Object.assign({}, state.view, routables.view())
  if (action.name === 'view') return merge({view})

  routables.update[action.name](action.update[action.name])
  routables.filter(state.view.choose.term)
  let updatedView = routables.view()
  view = Object.assign({}, state.view, updatedView)

  let allVisibleState = allVisible(routables.view().senders)
  view.choose.allVisibleState.senders = allVisibleState.current

  allVisibleState = allVisible(routables.view().receivers)
  view.choose.allVisibleState.receivers = allVisibleState.current

  let updatedRoutes = view.routes
  if (state.data.changes && state.data.changes.length >= 1) {
    updatedRoutes = reAddChanges({state})
    if (updatedRoutes === null) updatedRoutes = view.routes
  }
  view.routes = updatedRoutes

  return merge({view})
}
