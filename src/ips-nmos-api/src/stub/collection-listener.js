/**
 * Copyright 2019 British Broadcasting Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
