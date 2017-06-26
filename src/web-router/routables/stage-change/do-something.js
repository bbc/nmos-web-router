import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default ({data, oldSender, receiver}) => {
  data.routes.forEach(route => {
    if (route.receiver.id === receiver.id) {
      route.state = 'staged-unroute'
    }
  })
  if (oldSender) {
    oldSender.state = mapState(oldSender).stageUnroute().state()
    oldSender.stateString = stateToString(oldSender.state)
  } else {
    console.log('Sender invalid in function')
  }
}
