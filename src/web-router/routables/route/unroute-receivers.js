import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default ({data, receiver}) => {
  data.routes.forEach(route => {
    if (route.receiver.id === receiver.id) {
      route.state = 'unrouting'
      receiver.state = mapState(receiver).unroute().state()
      receiver.stateString = stateToString(receiver.state)
    }
  })
}
