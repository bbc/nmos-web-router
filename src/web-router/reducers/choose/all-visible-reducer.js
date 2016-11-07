import ChangeState from '../change-state'

export default (state, action, merge) => {
  let type = action.routableType
  let view = Object.assign({}, state.view)
  let choose = view.choose
  if (choose.allVisibleState[type] === 'all' || choose.allVisibleState[type] === 'some') choose.allVisibleState[type] = 'none'
  else if (choose.allVisibleState[type] === 'none') choose.allVisibleState[type] = 'all'

  view[type].forEach(routable => {
    let changeState = ChangeState(routable)
    if (routable.state.includes('fuzzymatch'))
      if (choose.allVisibleState[type] === 'all') changeState.check()
      else if (choose.allVisibleState[type] === 'none' && !routable.state.includes('unchecked')) changeState.uncheck()
  })

  return merge ({ view })
}
