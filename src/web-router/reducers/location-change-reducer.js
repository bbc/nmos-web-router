export default (state, action, merge) => {
  let pathname = action.payload.pathname
  let view = Object.assign({}, state.view)
  if (pathname.includes('/web-router/')) view.location = pathname.replace('/web-router', '')
  return merge({ view })
}
