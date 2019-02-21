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

const WebSocketServer = require('ws').Server

module.exports = (nmos, port) => {
  let wss = new WebSocketServer({port})

  wss.on('connection', (ws) => {
    let type = ws.upgradeReq.url.replace(/\//g, '')
    let subscription = nmos.subscription[type]()

    let token = subscription.subscribe({
      update (data) {
        ws.send(JSON.stringify(data))
      }
    })

    nmos[type]().then(data => {
      ws.send(JSON.stringify({
        grain: {
          data
        }
      }))
    })

    ws.on('close', function () {
      subscription.unsubscribe(token)
    })
  })
}
