import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default ({senders}) => {
  senders.forEach(sender => {
    if (!sender.hasOwnProperty('state')) {
      sender.state = mapState(sender).check().contract().selectable().state()
      sender.stateString = stateToString(sender.state)
    }
  })
}
