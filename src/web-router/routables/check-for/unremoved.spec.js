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

import CheckFor from './'
import generate from '../../../ips-nmos-api/src/stub/generate'
import Insert from '../insert'
import RemoveSender from '../update/remove-sender.js'
import RemoveReceiver from '../update/remove-receiver.js'
import StageChange from '../stage-change'
import cloneRoutables from '../common/clone-routables'

describe('stage-change', () => {
  let data
  let checkFor
  let senders
  let receivers

  beforeEach(() => {
    let sorted = []
    window.nmos = {
      defaultSort (left, right) {
        if (left.hasOwnProperty('flow_id')) sorted.push('sender')
        else if (left.hasOwnProperty('subscription')) sorted.push('receiver')
      }
    }

    senders = generate.senders(1)
    receivers = generate.receivers(1)
    receivers[0].subscription.sender_id = null

    data = cloneRoutables()
    data = Insert(data).senders(senders).view()
    data = Insert(data).receivers(receivers).view()
    data.changes = []
    checkFor = CheckFor(data)

    /* Stage a change and then remove both the sender and receiver */
    let stageChange = StageChange(data)
    data = stageChange(data.senders[0].id, data.receivers[0].id, 'route', true).view()

    let grain = { pre: data.senders[0] }
    RemoveSender({data, grain})
    grain = { pre: data.receivers[0] }
    RemoveReceiver({data, grain})
  })

  it('makes state of the change "unavailable-receiver" when the sender is unremoved', () => {
    data = Insert(data).senders(senders).view()
    data = checkFor('removed').view()

    expect(data.changes[0].state).toBe('unavailable-receiver')
  })

  it('makes state of the change "unavailable-sender" when the receiver is unremoved', () => {
    data = Insert(data).receivers(receivers).view()
    data = checkFor('removed').view()

    expect(data.changes[0].state).toBe('unavailable-sender')
  })

  it('makes state of the change "staged" when the sender and receiver are unremoved', () => {
    data = Insert(data).senders(senders).view()
    data = Insert(data).receivers(receivers).view()
    data = checkFor('removed').view()

    expect(data.changes[0].state).toBe('staged')
  })
})
