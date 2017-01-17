import mapInitialReceiverState from './map-receiver-initial-state'
import mapRoutedReceivers from './map-routed-receivers'
import mapSenderRoutedState from '../common/map-sender-routed-state'

export default (data, receivers) => {
  if (!data.hasOwnProperty('receivers')) data.receivers = receivers
  else data.receivers = data.receivers.concat(receivers)
  mapInitialReceiverState(data)
  mapRoutedReceivers(data)
  mapSenderRoutedState(data)
  data.receivers.sort(window.nmos.defaultSort)
}
