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

import connect from './connect-socket'
import Callbacks from './callbacks'
import Status from './status'

describe('connect', () => {
  let ws
  let callbacks
  let status
  let lastTriggered
  let updateData
  let errorData

  beforeEach(() => {
    ws = {}
    callbacks = Callbacks()
    callbacks.push({
      update (data) {
        lastTriggered = 'updated'
        updateData = data
      },
      error (error) {
        lastTriggered = 'errored'
        errorData = error
      },
      open () {
        lastTriggered = 'opened'
      },
      close () {
        lastTriggered = 'closed'
      }
    })
    status = Status()

    connect({ws, callbacks, status})
  })

  it('changes status to open when web socket is opened', () => {
    ws.onopen()

    expect(status.value()).toBe('open')
  })

  it('changes status to closed when web socket is closed', () => {
    ws.onclose()

    expect(status.value()).toBe('closed')
  })

  it('changes status to error when web socket has errored', () => {
    ws.onerror()

    expect(status.value()).toBe('error')
  })

  it('calls the open callback', () => {
    ws.onopen()

    expect(lastTriggered).toBe('opened')
  })

  it('parses the data from evt on message', () => {
    ws.onmessage({data: '{}'})

    expect(lastTriggered).toBe('updated')
    expect(updateData).toEqual({})
  })

  it('passes the error from an error', () => {
    ws.onerror('error data')

    expect(lastTriggered).toBe('errored')
    expect(errorData).toBe('error data')
  })

  it('calls the close callback', () => {
    ws.onclose()

    expect(lastTriggered).toBe('closed')
  })
})
