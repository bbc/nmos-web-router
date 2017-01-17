import initialReceiverState from './initial-receiver-state'
import mapRoutedReceivers from './map-routed-receivers'
import mapSenderRoutedState from '../common/map-sender-routed-state'
import addUnique from './add-unique'

export default (data, receivers) => {
  addUnique(data, 'receivers', receivers)
  initialReceiverState(data)
  mapRoutedReceivers(data)
  mapSenderRoutedState(data)
  data.receivers.sort(window.nmos.defaultSort)
}
