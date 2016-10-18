export default (state, action, merge) => {
  let view = Object.assign({}, state.view)
  let page = state.view.launchPage

  if (action.payload.pathname.includes('/web-router/connections/confirmation')) page = 'connections-confirmation'
  else if (action.payload.pathname.includes('/web-router/confirmation/connections')) page = 'connections-confirmation'
  else if (action.payload.pathname.includes('/web-router/connections')) page = 'connections'
  else if (action.payload.pathname.includes('/web-router/confirmation')) page = 'confirmation'

  view.page = page
  view.layout = page === 'connections-confirmation' ? '1/2' : '1'
  view.scroll = action.payload.pathname.includes('/web-router')

  return merge({ view })
}
