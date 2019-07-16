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

import remove from './remove-receiver'
import Insert from '../insert'
import generate from '../../../ips-nmos-api/src/stub/generate'
import cloneRoutables from '../common/clone-routables'

describe('removing receivers', () => {
  let data
  beforeEach(() => {
    window.nmos = {
      defaultSort () {}
    }

    let senders = generate.senders(1)
    senders[0].id = 'sender_id'
    let receivers = generate.receivers(1)
    receivers[0].subscription.sender_id = 'sender_id'

    let insert = Insert(cloneRoutables())
    data = insert.senders(senders).view()
    data = insert.receivers(receivers).view()

    let grain = {
      pre: receivers[0]
    }
    remove({data, grain})
    remove({data, grain})
  })

  it('changes the receiver to removed', () => {
    expect(data.receivers[0].state).toContain('removed')
  })

  it('unroutes any sender which was routed', () => {
    expect(data.senders[0].state).toContain('unrouted')
  })

  it('removes matching routes', () => {
    expect(data.routes.length).toBe(0)
  })
})
