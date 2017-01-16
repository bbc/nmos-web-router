import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default ({id, senders}) => {
  return senders.forEach(sender => {
    let senderMapState = mapState(sender).contract()
    if (sender.id === id) senderMapState.expand()
    sender.state = senderMapState.state()
    sender.stateString = stateToString(sender.state)
  })
}
