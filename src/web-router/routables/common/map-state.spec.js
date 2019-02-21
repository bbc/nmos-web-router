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

import mapState from './map-state'

describe('map state', () => {
  it('is immutable', () => {
    let routable = {}
    routable.state = mapState(routable)
      .contract()
      .state()

    expect(routable.state).toContain('contracted')

    mapState(routable).expand()

    expect(routable.state).toContain('contracted')
    expect(routable.state).not.toContain('expanded')
  })

  function itContainsOneStateAndNotTheOtherAndViseVersaWhen ({toFunc, fromFunc, toState, fromState}) {
    it(`${toFunc} will set state to ${toState} and remove ${fromState}`, () => {
      let routable = {}
      routable.state = mapState(routable)[fromFunc]()[toFunc]().state()

      if (toState !== 'blank') expect(routable.state).toContain(toState)
      expect(routable.state).not.toContain(fromState)
    })

    it(`${fromFunc} will set state to ${fromState} and remove ${toState}`, () => {
      let routable = {}
      routable.state = mapState(routable)[toFunc]()[fromFunc]().state()

      if (fromState !== 'blank') expect(routable.state).toContain(fromState)
      expect(routable.state).not.toContain(toState)
    })
  }

  [{
    toFunc: 'contract',
    fromFunc: 'expand',
    toState: 'contracted',
    fromState: 'expanded'
  }, {
    toFunc: 'fuzzymatch',
    fromFunc: 'fuzzymissmatch',
    toState: 'fuzzymatch',
    fromState: 'fuzzymissmatch'
  }, {
    toFunc: 'check',
    fromFunc: 'uncheck',
    toState: 'checked',
    fromState: 'unchecked'
  }, {
    toFunc: 'other',
    fromFunc: 'notOther',
    toState: 'other',
    fromState: 'blank'
  }, {
    toFunc: 'selectable',
    fromFunc: 'notSelectable',
    toState: 'selectable',
    fromState: 'blank'
  }, {
    toFunc: 'disable',
    fromFunc: 'enable',
    toState: 'disabled',
    fromState: 'blank'
  }, {
    toFunc: 'route',
    fromFunc: 'unroute',
    toState: 'routed',
    fromState: 'unrouted'
  }, {
    toFunc: 'routing',
    fromFunc: 'unrouting',
    toState: 'routing',
    fromState: 'unrouting'
  }, {
    toFunc: 'remove',
    fromFunc: 'unremove',
    toState: 'removed',
    fromState: 'blank'
  }].forEach(itContainsOneStateAndNotTheOtherAndViseVersaWhen)
})
