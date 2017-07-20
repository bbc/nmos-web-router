import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import expandedMediaType from './expanded-media-type'
import expandedFormat from './expanded-format'

export default (data, id) => {
  let mediaType, format

  // If the media_types field is present then filter according to media_types
  // Otherwise fall back to filtering according to format
  if (data.receivers[0].caps.media_types) {
    mediaType = expandedMediaType({senders: data.senders, id, flows: data.flows})
  } else {
    format = expandedFormat({senders: data.senders, id})
  }

  let mediaTypeMatches = (receiver, mediaType) => {
    let match = false
    receiver.caps.media_types.forEach(mType => {
      if (mType === mediaType) match = true
    })
    return match
  }

  data.receivers.forEach(receiver => {
    let receiverMapState = mapState(receiver).notSelectable().enable()
    if (mediaType) {
      if (mediaTypeMatches(receiver, mediaType)) receiverMapState.selectable()
      else if (mediaType !== 'contracting') receiverMapState.disable()
    } else {
      if (receiver.format === format) receiverMapState.selectable()
      else if (format !== 'contracting') receiverMapState.disable()
    }
    receiver.state = receiverMapState.state()
    receiver.stateString = stateToString(receiver.state)
  })
}
