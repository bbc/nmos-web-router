/*
Add a single change to the list of changes and update
the appearance of routables in 'Route' view accordingly
*/

import Routables from '../../routables'

export default (state, action, merge) => {
  // See ../../routables/stage-change
  let routables = Routables(state.view)
  let updatedView = routables.stageChange(action.sender.id, action.receiver.id, action.changeType).view()
  let view = Object.assign({}, state.view, updatedView)

  return merge({view})
}
