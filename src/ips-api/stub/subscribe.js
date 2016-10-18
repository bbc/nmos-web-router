import onInsert from './on-insert'
import onDelete from './on-delete'
import onUpdate from './on-update'

let types = [
  'flows',
  'nodes',
  'devices',
  'senders',
  'receivers'
]

export default (collections, delay) => {
  let subscriptions = {}

  types.forEach(type => {
    subscriptions[type] = (callback) => {
      let collection = collections[type]
      onInsert(collection, callback)
      onDelete(collection, callback)
      onUpdate(collection, callback)
    }
  })

  return subscriptions
}
