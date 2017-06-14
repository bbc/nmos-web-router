import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default ({data, sender, receiver}) => {
  data.routes.forEach(route => {
    if (route.receiver.id === receiver.id) route.state = 'routed'
  })
  receiver.state = mapState(receiver).unstageUnroute().state()
  receiver.stateString = stateToString(receiver.state)
  sender.state = mapState(sender).unstageUnroute().state()
  sender.stateString = stateToString(sender.state)
}
