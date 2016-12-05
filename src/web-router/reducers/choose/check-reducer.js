// import ChangeState from '../change-state'

// function allVisible (routables) {
//   let uncheckedSenders = 0
//   let filteredSenders = 0
//   routables.forEach(routable => {
//     if (routable.state.includes('fuzzymatch')) {
//       filteredSenders += 1
//       if (routable.state.includes('uncheck')) uncheckedSenders += 1
//     }
//   })
//   if (filteredSenders === 0) return 'none'
//   else if (uncheckedSenders === 0) return 'all'
//   else if (uncheckedSenders !== filteredSenders) return 'some'
//   return 'none'
// }
//
export default (state, action, merge) => {
//   let type = action.routable.type
//   let view = Object.assign({}, state.view)
//   let routable = view[type]
//     .filter(routable => {
//       return routable.id === action.routable.id
//     })[0]
//
//   let changeState = ChangeState(routable)
//
//   if (routable.state.includes('unchecked')) changeState.check()
//   else changeState.uncheck()
//   view.choose.allVisibleState.senders = allVisible(view.senders)
//   view.choose.allVisibleState.receivers = allVisible(view.receivers)
//   return merge({ view })
}
