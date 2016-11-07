import filter from './filter'

function allVisible (routables) {
  let unchecked = 0
  let filtered = 0
  routables.forEach(routable => {
    if (routable.state.includes('fuzzymatch')) {
      filtered += 1
      if (routable.state.includes('uncheck')) unchecked += 1
    }
  })
  if (filtered === 0) return 'none'
  else if (unchecked === 0) return 'all'
  else if (unchecked !== filtered) return 'some'
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
  if (view.senders.length !== 0) view.choose.allVisibleState.senders = allVisible(view.senders)
  if (view.receivers.length !== 0) view.choose.allVisibleState.receivers = allVisible(view.receivers)
  return merge({ view })
}
