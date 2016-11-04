export default (state, action, merge) => {
  let type = action.routableType
  let view = Object.assign({}, state.view)
  let choose = view.choose
  if (choose.allVisibleState[type] === 'all' || choose.allVisibleState[type] === 'some') choose.allVisibleState[type] = 'none'
  else if (choose.allVisibleState[type] === 'none') choose.allVisibleState[type] = 'all'
  return merge ({ view })
}
