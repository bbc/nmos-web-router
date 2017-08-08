import expandedMediaType from './expanded-media-type'
import expandedFormat from './expanded-format'
import filterReceivers from './filter-receivers'

export default (data, id, unicast) => {
  let mediaType = ''
  let format = ''

  if (!unicast.subscription_id) {
    data.receivers.forEach(receiver => {
      if (receiver.caps.media_types && !mediaType) mediaType = expandedMediaType({senders: data.senders, id, flows: data.flows})
    })
    format = expandedFormat({senders: data.senders, id})
  }
  filterReceivers(data.receivers, mediaType, format, unicast)
}
