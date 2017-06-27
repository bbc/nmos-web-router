import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import getRoutable from '../common/get-routable'

export default (senders, receivers, change) => {
  let sender = getRoutable(senders, change.sender.id)
  let receiver = getRoutable(receivers, change.receiver.id)
  // change the states of these routables accordingly
  // might need a new map state change
  sender.state = mapState(sender).removeUnavailableUnroute().state()
  sender.stateString = stateToString(sender.state)
  receiver.state = mapState(receiver).removeUnavailableUnroute().state()
  receiver.stateString = stateToString(receiver.state)
}

/*
*** Currently not in use ***
*/
