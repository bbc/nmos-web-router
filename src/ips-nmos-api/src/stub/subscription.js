let onInsert = require('./on-insert')
let onRemove = require('./on-remove')
let onModify = require('./on-modify')

const types = [
  'flows',
  'nodes',
  'devices',
  'senders',
  'receivers',
  'sources'
]

module.exports = function (collections, delay) {
  let subscriptionCallbacks = {}

  function subscription (type) {
    subscriptionCallbacks[type] = subscriptionCallbacks[type] || []
    let collection = collections[type]
    return {
      subscribe (callback) {
        function onCallback (data) {
          setTimeout(function () {
            callback(data)
          }, delay())
        }
        let insert = onInsert(collection, onCallback)
        let remove = onRemove(collection, onCallback)
        let modify = onModify(collection, onCallback)
        subscriptionCallbacks[type].push({ insert, remove, modify })
        return subscriptionCallbacks[type].length - 1
      },
      unsubscribe (token) {
        let listeners = subscriptionCallbacks[type][token]
        collection.removeListener('insert', listeners.insert)
        collection.removeListener('delete', listeners.remove)
        collection.removeListener('pre', listeners.modify.preCallback)
        collection.removeListener('update', listeners.modify.updateCallback)
      }
    }
  }

  let subscriptions = {}
  types.forEach(type => {
    subscriptions[type] = subscription(type)
  })

  return subscriptions
}
