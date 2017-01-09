import Routables from '../routables'
import allVisible from './choose/all-visible'

export default (state, action, merge) => {
  let pathname = action.payload.pathname
  let query = action.payload.query
  let view = Object.assign({}, state.view)
  if (pathname.includes('/web-router/')) {
    view.location = pathname.replace('/web-router', '')
    if (query.search !== '') {
      view.choose.term = query.search
    } else {
      view.choose.term = ''
    }
  }

  let routables = Routables(view)
  let filteredView = routables
    .filter(view.choose.term)
    .view()

  view = Object.assign({}, view, filteredView)

  let allVisibleState = allVisible(routables.view().senders)
  view.choose.allVisibleState.senders = allVisibleState.current

  allVisibleState = allVisible(routables.view().receivers)
  view.choose.allVisibleState.receivers = allVisibleState.current

  return merge({ view })
}
