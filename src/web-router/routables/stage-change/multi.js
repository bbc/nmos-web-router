import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import pushRoute from '../common/push-route'

export default ({data, sender, receiver, subscription}) => {
  data.routes.forEach(route => {
    if (route.receiver.id === receiver.id) {
      route.state = 'staged-unroute'
    }
  })
  if (subscription) {
    subscription.state = mapState(subscription).stageUnroute().state()
    subscription.stateString = stateToString(subscription.state)
  }

  receiver.state = mapState(receiver).stageMulti().state()
  receiver.stateString = stateToString(receiver.state)
  sender.state = mapState(sender).stageRoute().state()
  sender.stateString = stateToString(sender.state)
  let staged = true
  pushRoute({data, receiver, sender, staged})
}
