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

let Route = require('./route')

describe('Route', () => {
  let route, receivers

  beforeEach(() => {
    receivers = [{
      id: 'receiver_0',
      label: 'a',
      subscription: { sender_id: 'sender_0' }
    }, {
      id: 'receiver_1',
      label: 'a'
    }]

    let senders = [{
      id: 'sender_0',
      label: 'a'
    }, {
      id: 'sender_1',
      label: 'a'
    }]

    function stubFindOne (stubData) {
      return (query) => {
        return stubData.filter(data => {
          return data.id === query.id
        })[0] || null
      }
    }

    let collections = {
      receivers: {
        findOne: stubFindOne(receivers),
        modify (rec, data) {
          let newReceiver = Object.assign({}, rec, data)
          receivers = receivers.map(receiver => {
            if (receiver.id === newReceiver.id) return newReceiver
            return receiver
          })
        }
      },
      senders: { findOne: stubFindOne(senders) }
    }

    route = Route(collections, () => { return 0 })
  })

  it('Routing returns the sender if it exists', (done) => {
    route('receiver_0', {
      id: 'sender_1',
      label: 'a'
    }).then(data => {
      expect(data.id).toBe('sender_1')
      done()
    }).catch(error => {
      fail(error)
      done()
    })
  })

  it('Routing maps senders to receivers', (done) => {
    route('receiver_0', {
      id: 'sender_1',
      label: 'a'
    }).then(data => {
      expect(receivers[0].subscription.sender_id).toBe('sender_1')
      done()
    }).catch(error => {
      fail(error)
      done()
    })
  })

  it('Returns 404 if no sender found', (done) => {
    route('receiver_0', {
      id: 'invalid',
      label: 'a'
    }).then(data => {
      expect('should not be caught').toBe(true)
      done()
    }).catch(error => {
      try {
        expect(error).toBe('404 no sender')
      } catch (e) {
        fail(e)
        done()
      }
      done()
    })
  })

  it('Returns 404 if no receiver found', (done) => {
    route('invalid', {
      id: 'sender_0',
      label: 'a'
    }).then(data => {
      expect('should not be caught').toBe(true)
      done()
    }).catch(error => {
      try {
        expect(error).toBe('404 no receiver')
      } catch (e) {
        fail(e)
        done()
      }
      done()
    })
  })

  it('Changes sender to null when removing', (done) => {
    route('receiver_0', {}).then(data => {
      expect(receivers[0].subscription.sender_id).toBe(null)
      done()
    }).catch(error => {
      fail(error)
      done()
    })
  })
})
