import initialiseData from './data'
import loading from './loading'

export default (state, action, merge) => {
  let initialised = action.receivers || action.senders || action.flows

  let data = initialiseData(state, action)

  let view = Object.assign({}, state.view, {
    loading: loading(data, state.view),
    scroll: false
  })

  return merge({
    data,
    view,
    initialised: !!initialised
  })
}
