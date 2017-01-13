import mapState from '../map-state'
import stateToString from './state-to-string'

export default ({receivers}) => {
  receivers.forEach(receiver => {
    let receiverMapState = mapState(receiver).unroute()
    if (receiver.subscription.sender_id !== null) receiverMapState.route()
    receiver.state = receiverMapState.state()
    receiver.stateString = stateToString(receiver.state)
  })
}
