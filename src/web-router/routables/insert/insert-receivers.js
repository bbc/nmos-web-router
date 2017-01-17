import receiverState from './receiver-state'
import mapSenderRoutedState from '../common/map-sender-routed-state'
import addUnique from './add-unique'

export default (data, receivers) => {
  addUnique(data, 'receivers', receivers)
  receiverState(data)
  mapSenderRoutedState(data)
  data.receivers.sort(window.nmos.defaultSort)
}
