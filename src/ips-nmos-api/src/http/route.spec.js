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

const NMOS = require('../index')
const generate = require('../stub/generate')

const receiver = generate.receiver()
const sender = generate.sender()
const device = generate.device()
const node = generate.node()

let nmos = NMOS({
  stub: {
    data: {
      senders: [sender],
      receivers: [receiver],
      devices: [device],
      nodes: [node]
    }
  }
})
const route = require('./route')(nmos)

jest.mock('axios', () => {
  return {
    put (url) {
      let data

      return new Promise((resolve, reject) => {
        if (url === 'nodeHref/x-nmos/node/v1.0/receivers/receiverId/target') data = 'routed using node'
        else if (url === 'href/x-nmos/node/v1.0/receivers/receiverId/target') data = 'routed using href'
        resolve({data})
      })
    }
  }
})

describe('routing', () => {
  beforeEach(function () {
    sender.id = 'senderId'

    receiver.id = 'receiverId'
    receiver.device_id = 'deviceId'
    receiver.subscription.sender_id = null

    device.id = 'deviceId'
    device.node_id = 'nodeId'

    node.id = 'nodeId'
    node.href = 'nodeHref'
  })

  it('will route when given a receiver id and sender, it first calls devices then nodes to get the href', (done) => {
    route({id: 'receiverId', sender: {id: 'senderId'}})
      .then(data => {
        expect(data).toBe('routed using node')
        done()
      })
      .catch(error => {
        fail(error)
        done()
      })
  })

  it('will route when given a receiver id and sender and uses it\'s own href', (done) => {
    route({id: 'receiverId', sender: {id: 'senderId'}, href: 'href'})
      .then(data => {
        expect(data).toBe('routed using href')
        done()
      })
      .catch(error => {
        fail(error)
        done()
      })
  })
})
