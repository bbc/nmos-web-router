import state from './state'

const initial = (receiver, mapState) => {
  if (!receiver.hasOwnProperty('state')) mapState.check().contract().notSelectable()
}

const routed = (receiver, mapState) => {
  mapState.unroute()
  if (receiver.subscription.sender_id !== null) mapState.route()
}

export default (data) => {
  state(data, 'receivers', initial, routed)
}
