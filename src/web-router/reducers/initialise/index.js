import initialiseData from './data'
import loading from './loading'
import initialiseView from './view'

export default (state, action, merge) => {
  let initialised = action.receivers || action.senders || action.flows

  let data = initialiseData(state, action)

  let viewData = Object.assign({}, data)
  let view = Object.assign({}, state.view, {
    loading: loading(viewData, state.view),
    view: initialiseView(viewData, state.view),
    scroll: false
  })

  return merge({
    data,
    view,
    initialised: !!initialised
  })
}
