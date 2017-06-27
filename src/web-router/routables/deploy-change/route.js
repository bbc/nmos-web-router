import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default ({data, sender, receiver, subscription}) => {
  data.routes.forEach(route => {
    if (route.receiver.id === receiver.id && route.sender.id === sender.id) {
      route.state = 'routing'
    }
  })
  receiver.state = mapState(receiver).deployRoute().state()
  receiver.stateString = stateToString(receiver.state)
  sender.state = mapState(sender).deployRoute().state()
  sender.stateString = stateToString(sender.state)

  if (subscription) {
    subscription.state = mapState(subscription).deployUnroute().state()
    subscription.stateString = stateToString(subscription.state)
  }
}
