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

const onInsert = require('./on-insert')
const onRemove = require('./on-remove')
const onModify = require('./on-modify')
const random = require('./generate/random')

const types = [
  'flows',
  'nodes',
  'devices',
  'senders',
  'receivers',
  'sources'
]

module.exports = (collections, delay) => {
  let subscriptionCallbacks = {}

  let subscription = (type) => {
    subscriptionCallbacks[type] = subscriptionCallbacks[type] || []
    let collection = collections[type]
    return () => {
      return {
        connect (body = {}) {
          body.max_update_rate_ms = body.max_update_rate_ms || 100
          body.params = body.params || {}
          if (!body.hasOwnProperty('persist')) body.persist = false
          if (!body.hasOwnProperty('secure')) body.secure = false
          body.resource_path = `/${type}`
          let subscription = collections.subscriptions.find({
            resource_path: body.resource_path
          })
          if (subscription === null) {
            subscription = body
            subscription.ws_href = subscription.ws_href || `ws://localhost:6590/${type}`
            subscription.id = random.id()
            collections.subscriptions.insert(subscription)
          }
          subscription = collections.subscriptions.find({
            resource_path: body.resource_path
          })
          return new Promise((resolve, reject) => {
            resolve(subscription)
          })
        },
        disconnect () {},
        subscribe ({update, error, close, open}) {
          function onCallback (data) {
            setTimeout(function () {
              update({
                grain: {
                  data: [data]
                }
              })
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
        },
        status () {
          return 'stub'
        }
      }
    }
  }

  let subscriptions = {}
  types.forEach(type => {
    subscriptions[type] = subscription(type)
  })

  return subscriptions
}
