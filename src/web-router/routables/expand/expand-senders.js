import mapState from '../map-state'
import stateToString from '../state-to-string'

export default ({id, senders}) => {
  return senders.forEach(sender => {
    let senderMapState = mapState(sender).contract()
    if (sender.id === id) senderMapState.expand()
    sender.state = senderMapState.state()
    sender.stateString = stateToString(sender.state)
  })
}
