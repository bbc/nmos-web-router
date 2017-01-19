import state from './state'

const initial = (receiver, mapState, isNew) => {
  mapState.contract().notSelectable()
}

const routed = (receiver, mapState) => {
  mapState.unroute()
  if (receiver.subscription.sender_id !== null) mapState.route()
}

export default (data, isNew) => {
  state(data, 'receivers', initial, routed, isNew)
}
