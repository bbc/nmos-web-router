import mapSenderFormats from '../common/map-sender-formats'
import senderState from './sender-state'
import addUnique from './add-unique'
import insertRoutes from './insert-routes'
import unremoveRoutable from './unremove'

export default (data, senders, isNew) => {
  addUnique(data, 'senders', senders)
  mapSenderFormats(data)
  senderState(data, isNew)
  unremoveRoutable(data, 'senders', senders)
  data.senders.sort(window.nmos.defaultSort)
  insertRoutes(data)
}
