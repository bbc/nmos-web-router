import initialiseData from './data'
import loading from './loading'
import connections from './connections'

export default (state, action, merge) => {
  let initialised = action.receivers || action.senders || action.flows

  let data = initialiseData(state, action)

  let view = Object.assign({}, state.view, {
    loading: loading(data, state.view),
    connections: connections(data, state.view, state.sides),
    scroll: false
  })

  return merge({
    data,
    view,
    initialised: !!initialised
  })
}
