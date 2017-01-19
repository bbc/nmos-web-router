import state from './state'
import hasState from './has-state'

const initial = (sender, mapState, isNew) => {
  if (!hasState(sender.state, ['contracted', 'expanded'])) mapState.contract()
  mapState.selectable()
}

const routed = (sender, mapState, data) => {
  mapState.unroute()
  data.receivers.forEach(receiver => {
    if (receiver.subscription.sender_id === sender.id) mapState.route()
  })
}

export default (data, isNew) => {
  state(data, 'senders', initial, routed, isNew)
}
