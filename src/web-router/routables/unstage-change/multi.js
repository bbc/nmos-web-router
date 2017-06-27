import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import removeRoute from './remove-route'

export default ({data, sender, receiver, subscription}) => {
  receiver.state = mapState(receiver).unstageMulti().state()
  receiver.stateString = stateToString(receiver.state)
  sender.state = mapState(sender).unstageRoute().state()
  sender.stateString = stateToString(sender.state)
  removeRoute({data, receiver})

  data.routes.forEach(route => {
    if (route.receiver.id === receiver.id) route.state = 'routed'
  })
  if (subscription) {
    subscription.state = mapState(subscription).unstageUnroute().state()
    subscription.stateString = stateToString(subscription.state)
  }
}
