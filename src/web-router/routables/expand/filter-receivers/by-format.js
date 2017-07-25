import mapState from '../../common/map-state'
import stateToString from '../../common/state-to-string'
import transportMatches from './transport-matches'

export default (receivers, format, unicast) => {
  receivers.forEach(receiver => {
    let receiverMapState = mapState(receiver).notSelectable().enable()
    if (receiver.format === format && transportMatches(receiver, unicast)) receiverMapState.selectable()
    else if (format !== 'contracting') receiverMapState.disable()

    receiver.state = receiverMapState.state()
    receiver.stateString = stateToString(receiver.state)
  })
}
