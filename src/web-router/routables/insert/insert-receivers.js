import receiverState from './receiver-state'
import mapSenderRoutedState from '../common/map-sender-routed-state'
import addUnique from './add-unique'
import insertRoutes from './insert-routes'
import unremoveRoutable from './unremove'

export default (data, receivers, isNew) => {
  addUnique(data, 'receivers', receivers)
  receiverState(data, isNew)
  unremoveRoutable(data, 'receivers', receivers)
  mapSenderRoutedState(data)
  data.receivers.sort(window.nmos.defaultSort)
  insertRoutes(data)
}
