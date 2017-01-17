import mapSenderFormats from '../common/map-sender-formats'
import mapInitialSenderState from './map-sender-initial-state'
import mapSenderRoutedState from '../common/map-sender-routed-state'

export default (data, senders) => {
  if (!data.hasOwnProperty('senders')) data.senders = senders
  else data.senders = data.senders.concat(senders)
  mapSenderFormats(data)
  mapInitialSenderState(data)
  mapSenderRoutedState(data)
  data.senders.sort(window.nmos.defaultSort)
}
