import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let updatedView = []
  updatedView = routables.stageChange(action.receiver.id, action.sender.id, action.changeType).view()
  let view = Object.assign({}, state.view, updatedView)

  let updatedChanges = state.data.changes
  let newChange = {
    sender: action.sender,
    receiver: action.receiver,
    type: action.changeType,
    state: 'staged'
  }
  updatedChanges.push(newChange)

  let data = {
    receivers: state.data.receivers,
    senders: state.data.senders,
    flows: state.data.flows,
    changes: updatedChanges
  }

  let newState = {
    data: data,
    initialised: state.initialised,
    location: state.location,
    view: view
  }

  return merge({newState})
}
