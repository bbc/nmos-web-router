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

import check from './check'
import generate from '../../../ips-nmos-api/src/stub/generate'
import insert from '../insert'
import mapState from '../common/map-state'

describe('checking', () => {
  let data
  beforeEach(() => {
    window.nmos = {
      defaultSort (left, right) {
      }
    }
    let receivers = generate.receivers(2)
    let senders = generate.senders(2)

    receivers[0].subscription.sender_id = senders[0].id
    receivers[1].subscription.sender_id = null

    data = insert({}).receivers(receivers).view()
    data = insert(data).senders(senders).view()

    data.receivers.forEach((r) => {
      r.state += 'fuzzymatch'
    })
  })

  it('"all" routables changes them all to "checked"', () => {
    check(data, 'receivers', 'all')
    data.receivers.forEach(d => {
      expect(d.state).toContain('checked')
    })
  })

  it('"none" routables changes them all to "unchecked"', () => {
    check(data, 'receivers', 'none')
    data.receivers.forEach(d => {
      expect(d.state).toContain('unchecked')
    })
  })

  it('checking a routable which is checked will uncheck it', () => {
    data.receivers[0].state = mapState(data.receivers[0]).check().state()
    let routableId = data.receivers[0].id
    check(data, 'receivers', routableId)
    expect(data.receivers[0].state).toContain('unchecked')
  })

  it('checking a routable which is unchecked will check it', () => {
    data.receivers[0].state = mapState(data.receivers[0]).uncheck().state()
    let routableId = data.receivers[0].id
    check(data, 'receivers', routableId)
    expect(data.receivers[0].state).toContain('checked')
  })

  it('updates all routes', () => {
    data.receivers[0].state = mapState(data.receivers[0]).uncheck().state()
    let routableId = data.receivers[0].id
    check(data, 'receivers', routableId)
    expect(data.routes[0].receiver.state).toContain('checked')
    check(data, 'receivers', routableId)
    expect(data.routes[0].receiver.state).toContain('unchecked')
  })
})
