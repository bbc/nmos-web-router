import mapState from '../map-state'
import stateToString from '../state-to-string'

export default ({senders}) => {
  senders.forEach(sender => {
    sender.state = mapState(sender).check().contract().selectable().state()
    sender.stateString = stateToString(sender.state)
  })
}
