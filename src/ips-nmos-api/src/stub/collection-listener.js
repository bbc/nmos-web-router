let onInsert = require('./on-insert')
let onRemove = require('./on-remove')
let onModify = require('./on-modify')

module.exports = function (collections) {
  function listeners (type) {
    let collection = collections[type]

    return {
      on: {
        insert (callback) {
          return onInsert(collection, callback)
        },
        remove (callback) {
          return onRemove(collection, callback)
        },
        modify (callback) {
          return onModify(collection, callback)
        }
      },
      remove: {
        insert (listener) {
          collection.removeListener('insert', listener)
        },
        remove (listener) {
          collection.removeListener('delete', listener)
        },
        modify (listeners) {
          collection.removeListener('pre', listeners.preCallback)
          collection.removeListener('update', listeners.updateCallback)
        }
      }
    }
  }

  return {
    receivers: listeners('receivers')
  }
}
