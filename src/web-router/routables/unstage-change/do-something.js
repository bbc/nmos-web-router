import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default ({data, oldSender, receiver}) => {
  data.routes.forEach(route => {
    if (route.receiver.id === receiver.id) route.state = 'routed'
  })
  oldSender.state = mapState(oldSender).unstageUnroute().state()
  oldSender.stateString = stateToString(oldSender.state)
}
