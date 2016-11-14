import updateData from './data'
import updateView from './view'
import onGrain from './on-grain'

export default (state, action, merge) => {
  let stateData = Object.assign({}, state.data)
  onGrain(stateData[action.name], action.update[action.name], {
    update () { console.log('update:', action.name) },
    add () { console.log('add:', action.name) },
    remove () { console.log('remove:', action.name) },
    unknown () { console.log('unknown:', action.name) }
  })
  let data = updateData(state, action)
  let view = Object.assign({}, state.view)
  view = updateView(data, view, action)
  return merge({ data, view })
}
