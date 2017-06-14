import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import removeRoute from './remove-route'

export default ({data, sender, receiver}) => {
  receiver.state = mapState(receiver).unstageRoute().state()
  receiver.stateString = stateToString(receiver.state)
  sender.state = mapState(sender).unstageRoute().state()
  sender.stateString = stateToString(sender.state)
  removeRoute({data, receiver})
}
