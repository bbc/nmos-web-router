import updateData from './data'
import updateConnections from './connections'

export default (state, action, merge) => {
  let data = updateData(state, action)
  let view = Object.assign({}, state.view)
  view.connections = updateConnections(data, view.connections)
  return merge({ data, view })
}
