import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default ({receivers}) => {
  receivers.forEach(receiver => {
    if (!receiver.hasOwnProperty('state')) {
      receiver.state = mapState(receiver).check().contract().notSelectable().state()
      receiver.stateString = stateToString(receiver.state)
    }
  })
}
