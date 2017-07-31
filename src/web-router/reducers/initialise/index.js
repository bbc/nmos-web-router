import loading from './loading'
import Routables from '../../routables'
import allVisibleState from './all-visible-state'

export default (state, action, merge) => {
  let initialised = action.receivers || action.senders || action.flows

  let data = {
    receivers: action.receivers || state.data.receivers,
    senders: action.senders || state.data.senders,
    flows: action.flows || state.data.flows
  }
  let routables = Routables(data)
  routables.insert.receivers(data.receivers)
  routables.insert.senders(data.senders)
  routables.insert.flows(data.flows)
  routables.filter(state.view.choose.term)

  // If available, restore checked/unchecked status of routables from
  // browser session storage
  routables.check.senders('saved')
  routables.check.receivers('saved')

  let view = Object.assign({}, state.view, {
    loading: loading(routables.view(), state.view, action),
    choose: allVisibleState(data.senders, data.receivers, state.view.choose)
  }, routables.view())

  return merge({
    data,
    view,
    initialised: !!initialised
  })
}
