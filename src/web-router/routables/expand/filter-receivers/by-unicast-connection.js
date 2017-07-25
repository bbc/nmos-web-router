import mapState from '../../common/map-state'
import stateToString from '../../common/state-to-string'

export default (receivers, unicast) => {
  receivers.forEach(receiver => {
    let receiverMapState = mapState(receiver).notSelectable().enable()
    if (receiver.subscription.sender_id !== unicast.subscription_id) {
      receiverMapState.disable()
      receiver.state = receiverMapState.state()
      receiver.stateString = stateToString(receiver.state)
    }
  })
}
