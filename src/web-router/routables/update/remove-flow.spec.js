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

import remove from './remove-flow'
import generate from '../../../ips-nmos-api/src/stub/generate'

describe('adding flows', () => {
  let data
  beforeEach(() => {
    let flow = generate.flow()
    let sender = generate.sender()
    sender.flow_id = flow.id
    sender.format = 'faken'
    flow.format = 'format'

    data = {
      senders: [sender],
      flows: [flow]
    }
    let grain = {
      pre: flow
    }
    remove({data, grain})
    remove({data, grain})
  })

  it('removes flow to data', () => {
    expect(data.flows.length).toBe(0)
  })

  it('updates senders with format', () => {
    expect(data.senders[0].format).toBe('no')
  })
})
