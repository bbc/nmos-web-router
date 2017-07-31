/* Change the 'allVisibleState' if the checked value of some routables has been
changed by restoring the contents of window.sessionStorage */

export default (senders, receivers, choose) => {
  let setAllVisibleState = (routables, type) => {
    let unchecked = 0
    routables.forEach(routable => {
      if (routable.state.includes('unchecked')) unchecked++
    })
    if (unchecked === routables.length && unchecked !== 0) choose.allVisibleState[type] = 'none'
    else if (unchecked > 0) choose.allVisibleState[type] = 'some'
  }

  if (senders) setAllVisibleState(senders, 'senders')
  if (receivers) setAllVisibleState(receivers, 'receivers')

  return choose
}
