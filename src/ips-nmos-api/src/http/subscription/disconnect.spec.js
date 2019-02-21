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

import Disconnect from './disconnect'
import Status from './status'

let deletUrl
jest.mock('axios', () => {
  return {
    delete (url) {
      deletUrl = url
      return new Promise((resolve, reject) => {
        resolve()
      })
    }
  }
})

describe('disconnect', () => {
  let status
  let ws
  let disconnect
  let closed

  beforeEach(() => {
    deletUrl = 'not deleted'
    status = Status()
    status.open()

    closed = 'socket was not closed'
    ws = {
      close () {
        closed = 'socket closed'
      }
    }

    disconnect = Disconnect({baseUrl: 'baseUrl', apiVersion: 'apiVersion', ws, status})
  })

  it('changes status to closed', () => {
    disconnect()

    expect(status.value()).toBe('closed')
  })

  it('closes web socket', () => {
    disconnect()

    expect(closed).toBe('socket closed')
  })

  it('deletes if id is given', () => {
    disconnect('id')
    expect(deletUrl).toBe('baseUrl/x-nmos/query/apiVersion/subscriptions/id')
  })
})
