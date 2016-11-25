let Route = require('../../src/stub/route')

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
