import receiverState from './receiver-state'
import mapSenderRoutedState from '../common/map-sender-routed-state'
import addUnique from './add-unique'
import insertRoutes from './insert-routes'

export default (data, receivers, isNew) => {
  addUnique(data, 'receivers', receivers)
  receiverState(data, isNew)
  mapSenderRoutedState(data)
  data.receivers.sort(window.nmos.defaultSort)
  insertRoutes(data)
}
