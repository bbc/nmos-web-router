import mapState from './map-state'
import stateToString from './state-to-string'
import isSenderRouted from './is-sender-routed'

export default ({senders, receivers}) => {
  senders.forEach(sender => {
    let senderMapState = mapState(sender).unroute()
    if (isSenderRouted({sender, receivers})) senderMapState.route()
    sender.state = senderMapState.state()
    sender.stateString = stateToString(sender.state)
  })
}
