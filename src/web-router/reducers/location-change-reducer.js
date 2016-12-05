export default (state, action, merge) => {
  let pathname = action.payload.pathname
  let query = action.payload.query
  let view = Object.assign({}, state.view)
  if (pathname.includes('/web-router/')) {
    view.location = pathname.replace('/web-router', '')
    if (query.hasOwnProperty('search')) {
      view.choose.term = query.search
    }
  }
  return merge({ view })
}
