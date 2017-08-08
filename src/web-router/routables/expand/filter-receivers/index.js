import byUnicastSubscription from './by-unicast-connection'
import byMediaType from './by-media-type'
import byFormat from './by-format'

export default (receivers, mediaType, format, unicast) => {
  // If expanded sender is unicast and is already routed then grey out all other receivers
  if (unicast.subscription_id) byUnicastSubscription(receivers, unicast)
  else {
    receivers.forEach(receiver => {
      if (receiver.caps.media_types && mediaType) byMediaType(receiver, mediaType, unicast)
      else byFormat(receiver, format, unicast)
    })
  }
}
