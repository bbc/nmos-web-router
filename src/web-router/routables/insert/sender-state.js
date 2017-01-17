import state from './state'

const initial = (sender, mapState) => {
  if (!sender.hasOwnProperty('state')) mapState.check().contract().selectable()
}

const routed = (sender, mapState, data) => {
  mapState.unroute()
  data.receivers.forEach(receiver => {
    if (receiver.subscription.sender_id === sender.id) mapState.route()
  })
}

export default (data) => {
  state(data, 'senders', initial, routed)
}
