import updateData from './data'
// import updateView from './view'

export default (state, action, merge) => {
  if (action.name === 'view') return merge({ view: Object.assign({}, state.view) })
  let data = updateData(state, action)
  // let view = Object.assign({}, state.view)
  // view = updateView(data, view, action)
  return merge({ data })
}
