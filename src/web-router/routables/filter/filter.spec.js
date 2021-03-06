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

import Filter from './'

describe('filter', () => {
  it('matches againt lowercase label', () => {
    let senders = [{
      label: 'Some Term in here',
      id: 'abcd-efg',
      state: [],
      stateString: ''
    }, {
      label: 'none in here',
      id: 'abcd-efg',
      state: [],
      stateString: ''
    }]

    let receivers = [{
      label: 'Some Term in here',
      id: 'abcd-efg',
      state: [],
      stateString: ''
    }, {
      label: 'none in here',
      id: 'abcd-efg',
      state: [],
      stateString: ''
    }]

    let filter = Filter({senders, receivers})

    let data = filter('term').view()

    expect(data.senders[0].state).toContain('fuzzymatch')
    expect(data.senders[1].state).toContain('fuzzymissmatch')

    expect(data.receivers[0].state).toContain('fuzzymatch')
    expect(data.receivers[1].state).toContain('fuzzymissmatch')
  })

  it('matches againt lowercase id', () => {
    let senders = [{
      label: 'none in here',
      id: 'abcd-term-efg',
      state: [],
      stateString: ''
    }, {
      label: 'none in here',
      id: 'abcd-efg',
      state: [],
      stateString: ''
    }]

    let receivers = [{
      label: 'none in here',
      id: 'abcd-term-efg',
      state: [],
      stateString: ''
    }, {
      label: 'none in here',
      id: 'abcd-efg',
      state: [],
      stateString: ''
    }]

    let filter = Filter({senders, receivers})

    let data = filter('term').view()

    expect(data.senders[0].state).toContain('fuzzymatch')
    expect(data.senders[1].state).toContain('fuzzymissmatch')

    expect(data.receivers[0].state).toContain('fuzzymatch')
    expect(data.receivers[1].state).toContain('fuzzymissmatch')
  })
})
