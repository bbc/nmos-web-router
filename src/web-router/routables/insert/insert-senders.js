import mapSenderFormats from '../common/map-sender-formats'
import senderState from './sender-state'
import addUnique from './add-unique'
import insertRoutes from './insert-routes'

export default (data, senders, isNew) => {
  addUnique(data, 'senders', senders)
  mapSenderFormats(data)
  senderState(data, isNew)
  data.senders.sort(window.nmos.defaultSort)
  insertRoutes(data)
}
