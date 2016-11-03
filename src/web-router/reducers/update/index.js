import updateData from './data'
import updateView from './view'

export default (state, action, merge) => {
  let data = updateData(state, action)
  let view = Object.assign({}, state.view)
  view = updateView(data, view)
  return merge({ data, view })
}
