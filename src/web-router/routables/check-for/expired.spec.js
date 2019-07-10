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
import Remove from '../update/remove-sender.js'
import check from '../check/check'
import cloneRoutables from '../common/clone-routables'

describe('stage-change', () => {
  let data
  let checkFor
  const elevenMins = 60 * 11 * 1000

  beforeEach(() => {
    let sorted = []
    window.nmos = {
      defaultSort (left, right) {
        if (left.hasOwnProperty('flow_id')) sorted.push('sender')
        else if (left.hasOwnProperty('subscription')) sorted.push('receiver')
      }
    }

    let senders = generate.senders(2)
    let receivers = generate.receivers(2)

    data = cloneRoutables()
    data = Insert(data).senders(senders).view()
    data = Insert(data).receivers(receivers).view()
    data.changes = []
    checkFor = CheckFor(data)

    let grain = {
      pre: senders[0]
    }
    Remove({data, grain})
  })

  it('an unchecked routable removed less than 10 minutes ago does not expire', () => {
    let senderID = data.senders[0].id
    check(data, 'senders', senderID)
    data = checkFor('expired').view()

    expect(data.senders.length).toBe(2)
    expect(data.receivers.length).toBe(2)
  })

  it('a checked routable removed more than 10 minutes ago does not expire', () => {
    data.senders[0].timeRemoved -= elevenMins
    data = checkFor('expired').view()

    expect(data.senders.length).toBe(2)
    expect(data.receivers.length).toBe(2)
  })

  it('an unchecked routable removed more than 10 minutes ago does expire', () => {
    let senderID = data.senders[0].id
    check(data, 'senders', senderID)
    data.senders[0].timeRemoved -= elevenMins
    data = checkFor('expired').view()

    expect(data.senders.length).toBe(1)
    expect(data.receivers.length).toBe(2)
  })
})
