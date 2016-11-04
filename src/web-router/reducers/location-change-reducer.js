import filter from './filter'

function allVisible (routables) {
  let uncheckedSenders = 0
  let filteredSenders = 0
  routables.forEach(routable => {
    if (routable.state.includes('fuzzymatch')) {
      filteredSenders += 1
      if (routable.state.includes('uncheck')) uncheckedSenders += 1
    }
  })
  if (filteredSenders === 0) return 'none'
  else if (uncheckedSenders === 0) return 'all'
  else if (uncheckedSenders !== filteredSenders) return 'some'
  return 'none'
}

export default (state, action, merge) => {
  let pathname = action.payload.pathname
  let query = action.payload.query
  let view = Object.assign({}, state.view)
  if (pathname.includes('/web-router/')) {
    view.location = pathname.replace('/web-router', '')
    if (query.hasOwnProperty('search')) {
      view.choose.term = query.search
      view = filter(view)
    }
  }
  view.choose.allVisibleState.senders = allVisible(view.senders)
  view.choose.allVisibleState.receivers = allVisible(view.receivers)
  return merge({ view })
}
