import mapState from '../../common/map-state'
import stateToString from '../../common/state-to-string'
import transportMatches from './transport-matches'

export default (receivers, mediaType, unicast) => {
  let mediaTypeMatches = (receiver, mediaType) => {
    let match = false
    receiver.caps.media_types.forEach(mType => {
      if (mType === mediaType) match = true
    })
    return match
  }

  receivers.forEach(receiver => {
    let receiverMapState = mapState(receiver).notSelectable().enable()
    if (mediaTypeMatches(receiver, mediaType) && transportMatches(receiver, unicast)) receiverMapState.selectable()
    else if (mediaType !== 'contracting') receiverMapState.disable()

    receiver.state = receiverMapState.state()
    receiver.stateString = stateToString(receiver.state)
  })
}
