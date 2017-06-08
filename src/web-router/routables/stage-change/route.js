import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import pushRoute from '../common/push-route'

export default ({data, sender, receiver}) => {
  receiver.state = mapState(receiver).stageRoute().state()
  receiver.stateString = stateToString(receiver.state)
  sender.state = mapState(sender).stageRoute().state()
  sender.stateString = stateToString(sender.state)
  let staged = true
  pushRoute({data, receiver, sender, staged})
}
