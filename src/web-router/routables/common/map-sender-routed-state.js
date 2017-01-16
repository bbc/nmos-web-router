import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default ({senders, receivers}) => {
  let isSenderRouted = ({sender, receivers}) => {
    return receivers.some(receiver => {
      return receiver.subscription.sender_id === sender.id && !receiver.state.includes('removed')
    })
  }

  senders.forEach(sender => {
    let senderMapState = mapState(sender).unroute()
    if (isSenderRouted({sender, receivers})) senderMapState.route()
    sender.state = senderMapState.state()
    sender.stateString = stateToString(sender.state)
  })
}
