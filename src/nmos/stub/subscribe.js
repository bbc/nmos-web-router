import onInsert from './on-insert'
import onRemove from './on-remove'
import onModify from './on-modify'

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
      onRemove(collection, callback)
      onModify(collection, callback)
    }
  })

  return subscriptions
}
