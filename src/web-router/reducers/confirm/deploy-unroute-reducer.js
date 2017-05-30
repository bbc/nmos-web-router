import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let updatedView = routables.unroute(action.receiver.id).view()
  let view = Object.assign({}, state.view, updatedView)

  let updatedChanges = state.data.changes
  updatedChanges[action.changeIndex].state = 'deployed'
  console.log(updatedChanges)
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
