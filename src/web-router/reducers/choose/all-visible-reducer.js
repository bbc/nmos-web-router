import ChangeState from '../change-state'

export default (state, action, merge) => {
  let type = action.routableType
  let view = Object.assign({}, state.view)
  let choose = view.choose

  let checked = 0
  let unchecked = 0
  let matched = 0
  view[type].forEach(routable => {
    if (routable.state.includes('fuzzymatch')) {
      matched += 1
      if (routable.state.includes('unchecked')) unchecked += 1
      else checked += 1
    }
  })

  if (checked === matched) choose.allVisibleState[type] = 'none'
  else if (unchecked === matched) choose.allVisibleState[type] = 'all'
  else if (checked > unchecked) choose.allVisibleState[type] = 'all'
  else choose.allVisibleState[type] = 'none'

  view[type].forEach(routable => {
    let changeState = ChangeState(routable)
    if (routable.state.includes('fuzzymatch'))
      if (choose.allVisibleState[type] === 'all') changeState.check()
      else if (choose.allVisibleState[type] === 'none' && !routable.state.includes('unchecked')) changeState.uncheck()
  })

  return merge ({ view })
}
