import byUnicastSubscription from './by-unicast-connection'
import byMediaType from './by-media-type'
import byFormat from './by-format'

export default (receivers, mediaType, format, unicast) => {
  // If expanded sender is unicast and is already routed then grey out all other receivers
  if (unicast.subscription_id) byUnicastSubscription(receivers, unicast)
  // Otherwise filter according to media type if using Query API v1.1 or higher
  else if (mediaType) byMediaType(receivers, mediaType, unicast)
  // Fallback to filtering according to format
  else if (format) byFormat(receivers, format, unicast)
}
