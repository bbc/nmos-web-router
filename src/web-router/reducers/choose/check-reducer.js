export default (state, action, merge) => {
  let type = action.routable.type
  let view = Object.assign({}, state.view)
  let routable = view[type]
    .filter(routable => {
      return routable.id === action.routable.id
    })[0]
  if (routable.state.includes('unchecked')) routable.state = routable.state.replace('unchecked', 'checked')
  else routable.state = routable.state.replace('checked', 'unchecked')
  return merge({ view })
}
