import expandedMediaType from './expanded-media-type'
import expandedFormat from './expanded-format'
import filterReceivers from './filter-receivers'

export default (data, id, unicast) => {
  let mediaType = ''
  let format = ''

  if (!unicast.subscription_id) {
    if (data.receivers[0].caps.media_types) {
      mediaType = expandedMediaType({senders: data.senders, id, flows: data.flows})
    } else {
      format = expandedFormat({senders: data.senders, id})
    }
  }
  filterReceivers(data.receivers, mediaType, format, unicast)
}
