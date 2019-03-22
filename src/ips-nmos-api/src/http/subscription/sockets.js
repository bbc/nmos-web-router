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

const Disconnect = require('./disconnect')
const connect = require('./connect-socket')
const create = require('./create')

module.exports = ({baseUrl, apiVersion, callbacks, status, type, WebSocket, downgrade, downgradeVersion}) => {
  let ws = {
    close () {}
  }
  let disconnect = Disconnect({baseUrl, apiVersion, ws, status})

  return {
    connect (options) {
      options.connection = options.connection || {}
      let body = options.connection
      return create({body, baseUrl, apiVersion, type, downgrade, downgradeVersion})
          .then(subscription => {
            if (status.value() === 'closed' || status.value() === 'errored') {
              status.connecting()
              let wsHref = new window.URL(subscription.data.ws_href)
              let bearerToken = window.sessionStorage.getItem('bearerToken')
              if (bearerToken) wsHref.searchParams.append('authorization', 'Bearer ' + JSON.parse(bearerToken).access_token)
              ws = new WebSocket(wsHref)
              disconnect = Disconnect({baseUrl, apiVersion, ws, status})
              connect({ws, callbacks, status})
            }
            return new Promise((resolve, reject) => {
              resolve(subscription)
            })
          })
          .catch((err) => {
            return new Promise((resolve, reject) => {
              if (err.response) {
                if (err.response.data.code === 401) err.response.data.error += ' Please Sign In.'
              }
              // For instances when a URL is found for a Query API but it is unresponsive
              if (err.message === 'Network Error') err = 'Unable to connect to the Query API'
              reject(err)
            })
          })
    },
    disconnect () {
      disconnect()
    }
  }
}
