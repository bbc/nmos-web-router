import state from './state'

const initial = (receiver, mapState, isNew, data) => {
  if (data.expanded && data.expanded.state && data.expanded.state.includes('expanded')) mapState.contract().selectable()
  else mapState.contract().notSelectable()
}

const routed = (receiver, mapState) => {
  mapState.unroute()
  if (receiver.subscription.sender_id !== null) mapState.route()
}

export default (data, isNew) => {
  state(data, 'receivers', initial, routed, isNew)
}
