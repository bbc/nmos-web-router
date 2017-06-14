/*
Add a single change to the list of changes and update
the appearance of routables in 'Route' view accordingly
*/

import Routables from '../../routables'

export default (state, action, merge) => {
  // Update state of routables in 'Route' view
  // See ../../routables/stage-change
  let routables = Routables(state.view)
  let updatedView = []
  updatedView = routables.stageChange(action.receiver.id, action.sender.id, action.changeType).view()
  let view = Object.assign({}, state.view, updatedView)

  // Push new change to list of changes and merge to produce next state
  let updatedChanges = state.data.changes
  let newChange = {
    sender: action.sender,
    receiver: action.receiver,
    type: action.changeType,
    state: 'staged'
  }
  updatedChanges.push(newChange)

  let data = {
    changes: updatedChanges
  }

  let newState = {
    data: data,
    view: view
  }

  return merge({newState})
}
