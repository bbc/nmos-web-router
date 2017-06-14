import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default ({data, sender, receiver}) => {
  data.routes.forEach(route => {
    if (route.receiver.id === receiver.id) {
      route.state = 'staged-unroute'
      console.log('Staged unroute')
    }
  })
  receiver.state = mapState(receiver).stageUnroute().state()
  receiver.stateString = stateToString(receiver.state)
  sender.state = mapState(sender).stageUnroute().state()
  sender.stateString = stateToString(sender.state)
}
