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

import Insert from './'
import generate from '../../../ips-nmos-api/src/stub/generate'
import cloneRoutables from '../common/clone-routables'

describe('insert', () => {
  let data
  let sorted
  let senders
  let flows
  let receivers
  let insert

  beforeEach(() => {
    sorted = []
    window.nmos = {
      defaultSort (left, right) {
        if (left.hasOwnProperty('flow_id')) sorted.push('sender')
        else if (left.hasOwnProperty('subscription')) sorted.push('receiver')
      }
    }
    insert = Insert(cloneRoutables())

    senders = generate.senders(2)
    senders[0].id = 'sender_id'
    senders[0].flow_id = 'flow_id'

    flows = generate.flows(2)
    flows[0].id = 'flow_id'

    receivers = generate.receivers(2)
    receivers[0].id = 'receiver_id'
    receivers[0].subscription.sender_id = 'sender_id'
    receivers[1].subscription.sender_id = null

    data = insert.flows(flows).view()
    data = insert.receivers(receivers).view()
    data = insert.senders(senders).view()
  })

  it('simply adds the flows', () => {
    expect(data.flows).toEqual(flows)
  })

  it('maps the flows to matching senders', () => {
    expect(data.senders[0].format).toBe(data.flows[0].format)
  })

  it('maps format of senders to "no" if no flow is found', () => {
    expect(data.senders[1].format).toBe('no')
  })

  it('senders has initial state with checked, contracted and selectable', () => {
    expect(data.senders[0].state).toContain('checked')
    expect(data.senders[0].state).toContain('contracted')
    expect(data.senders[0].state).toContain('selectable')
  })

  it('receivers has initial state with checked, contracted and selectable', () => {
    expect(data.receivers[0].state).toContain('checked')
    expect(data.receivers[0].state).toContain('contracted')
  })

  it('has senders routed if there is a matching receiver', () => {
    expect(data.senders[0].state).toContain('routed')
    expect(data.senders[1].state).not.toContain('routed')
  })

  it('has receivers routed if they have a non null subscription', () => {
    expect(data.receivers[0].state).toContain('routed')
    expect(data.receivers[1].state).not.toContain('routed')
  })

  it('sorts the senders and receivers with defaultSort', () => {
    expect(sorted).toContain('sender')
    expect(sorted).toContain('receiver')
  })

  it('updates doubles, flow', () => {
    let newFlows = generate.flows(1)
    newFlows[0].id = 'flow_id'
    newFlows[0].label = 'new'
    data = insert.flows(newFlows).view()

    expect(data.flows.length).toBe(2)
    expect(data.flows[0].id).toBe('flow_id')
    expect(data.flows[0].label).toBe('new')
  })

  it('updates doubles, receivers', () => {
    let newReceivers = generate.receivers(1)
    newReceivers[0].id = 'receiver_id'
    newReceivers[0].label = 'new'
    data = insert.receivers(newReceivers).view()

    expect(data.receivers.length).toBe(2)
    expect(data.receivers[0].id).toBe('receiver_id')
    expect(data.receivers[0].label).toBe('new')
  })

  it('updates doubles, senders', () => {
    let newSenders = generate.senders(1)
    newSenders[0].id = 'sender_id'
    newSenders[0].label = 'new'
    data = insert.senders(newSenders).view()

    expect(data.senders.length).toBe(2)
    expect(data.senders[0].id).toBe('sender_id')
    expect(data.senders[0].label).toBe('new')
  })
})
