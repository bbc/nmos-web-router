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

import UnstageChange from './'
import StageChange from '../stage-change'
import generate from '../../../ips-nmos-api/src/stub/generate'
import Insert from '../insert'
import cloneRoutables from '../common/clone-routables'

describe('unstage-change', () => {
  let data
  let unstageChange

  beforeEach(() => {
    let sorted = []
    window.nmos = {
      defaultSort (left, right) {
        if (left.hasOwnProperty('flow_id')) sorted.push('sender')
        else if (left.hasOwnProperty('subscription')) sorted.push('receiver')
      }
    }

    /* Set up an unrouted sender/receiver pair and a routed sender/receiver pair */

    let senders = generate.senders(2)
    let receivers = generate.receivers(2)

    receivers[0].subscription.sender_id = null
    receivers[1].subscription.sender_id = senders[1].id

    data = cloneRoutables()
    data = Insert(data).senders(senders).view()
    data = Insert(data).receivers(receivers).view()
    data.changes = []
    unstageChange = UnstageChange(data)
    let stageChange = StageChange(data)

    /* Stage a route change and an unroute change to the sender/receiver pairs */

    data = stageChange(data.senders[0].id, data.receivers[0].id, 'route', true).view()
    data = stageChange(data.senders[1].id, data.receivers[1].id, 'unroute', true).view()
  })

  it('unstages a routing change', () => {
    data = unstageChange(data.changes[0]).view()

    expect(data.changes.length).toBe(1)
    expect(data.changes[0].type).toBe('unroute')
    expect(data.routes.length).toBe(1)
    expect(data.receivers[0].state).toContain('unrouted')
    expect(data.senders[0].state).toContain('unrouted')
  })

  it('unstages an unrouting change', () => {
    data = unstageChange(data.changes[1]).view()

    expect(data.changes.length).toBe(1)
    expect(data.changes[0].type).toBe('route')
    expect(data.routes.length).toBe(2)
    expect(data.receivers[1].state).toContain('routed')
    expect(data.senders[1].state).toContain('routed')
  })
})
