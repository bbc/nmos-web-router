import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default ({sender, receiver}) => {
  sender.state = mapState(sender).route().state()
  sender.stateString = stateToString(sender.state)
  receiver.state = mapState(receiver).route().state()
  receiver.stateString = stateToString(receiver.state)
}
