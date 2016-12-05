import loading from './loading'
import Routables from '../../routables'

export default (state, action, merge) => {
  let initialised = action.receivers || action.senders || action.flows

  let data = {
    receivers: action.receivers || state.data.receivers,
    senders: action.senders || state.data.senders,
    flows: action.flows || state.data.flows
  }
  let routables = Routables(data)

  let view = Object.assign({}, state.view, {
    loading: loading(routables.view(), state.view)
  }, routables.view())

  return merge({
    data,
    view,
    initialised: !!initialised
  })
}
