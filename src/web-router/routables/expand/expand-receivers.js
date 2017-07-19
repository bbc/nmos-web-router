import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import expandedMediaType from './expanded-media-type'

export default (data, id) => {
  let mediaType = expandedMediaType({senders: data.senders, id, flows: data.flows})

  let mediaTypeMatches = (receiver, mediaType) => {
    let match = false
    receiver.caps.media_types.forEach(mType => {
      if (mType === mediaType) match = true
    })
    return match
  }

  data.receivers.forEach(receiver => {
    let receiverMapState = mapState(receiver).notSelectable().enable()
    if (mediaTypeMatches(receiver, mediaType)) receiverMapState.selectable()
    else if (mediaType !== 'contracting') receiverMapState.disable()
    receiver.state = receiverMapState.state()
    receiver.stateString = stateToString(receiver.state)
  })
}
