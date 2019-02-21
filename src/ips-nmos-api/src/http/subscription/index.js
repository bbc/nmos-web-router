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

const Callbacks = require('./callbacks')
const Status = require('./status')
const Sockets = require('./sockets')

module.exports = (baseUrl, apiVersion, getters, WebSocket, type, downgrade, downgradeVersion) => {
  let callbacks = Callbacks()
  let status = Status()
  let sockets = Sockets({baseUrl, apiVersion, callbacks, status, type, WebSocket, downgrade, downgradeVersion})

  return () => {
    let subscription = {
      connect (options = {}) {
        return sockets.connect(options)
      },
      disconnect (id) {
        return sockets.disconnect(id)
      },
      subscribe (options = {}) {
        options.connection = options.connection || {}
        return callbacks.push(options)
      },
      unsubscribe (token) {
        callbacks.pop(token)
      },
      status () {
        return status.value()
      }
    }
    return subscription
  }
}
