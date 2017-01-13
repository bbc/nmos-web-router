import mapState from './map-state'
import stateToString from './state-to-string'

export default ({receivers}) => {
  receivers.forEach(receiver => {
    receiver.state = mapState(receiver).check().contract().notSelectable().state()
    receiver.stateString = stateToString(receiver.state)
  })
}
