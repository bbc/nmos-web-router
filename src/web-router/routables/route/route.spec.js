import Insert from '../insert'
import Route from '.'
import generate from '../../../ips-nmos-api/src/stub/generate'

describe('routing', () => {
  let data
  let route
  beforeEach(() => {
    window.nmos = {
      defaultSort (left, right) {
      }
    }

    let senders = generate.senders(2)
    senders[0].id = 'sender_0'
    senders[1].id = 'sender_1'

    let receivers = generate.receivers(2)
    receivers[0].id = 'receiver_0'
    receivers[0].subscription.sender_id = null
    receivers[1].id = 'receiver_1'
    receivers[1].subscription.sender_id = 'sender_1'

    data = {}
    data = Insert(data).senders(senders).view()
    data = Insert(data).receivers(receivers).view()
    route = Route(data)
  })

  it('two routables which have yet to be routed become "routing"', () => {
    data = route('receiver_0', 'sender_0').view()

    expect(data.routes[1].state).toBe('routing')
  })

  it('two routables already routed becomes "routed"', () => {
    data = route('receiver_1', 'sender_1').view()

    expect(data.routes[0].state).toBe('routing')
  })

  it('changes routes routed to a receiver to be "unrouting" if no sender id present', () => {
    data = route('receiver_1').view()

    expect(data.routes[0].state).toBe('unrouting')
  })

  it('will make the old receiver unrouting and make the new one routing', () => {
    data = route('receiver_1', 'sender_0').view()

    expect(data.routes[0].state).toBe('unrouting')
    expect(data.routes[1].state).toBe('routing')
  })

  it('updates senders and receivers with their new routed state when creating a new route', () => {
    expect(data.senders[0].state).toContain('unrouted')
    expect(data.receivers[0].state).toContain('unrouted')

    data = route('receiver_0', 'sender_0').view()

    expect(data.senders[0].state).toContain('routed')
    expect(data.receivers[0].state).toContain('routed')
  })

  it('senders do not get updated because you can not interect with them like a receiver', () => {
    expect(data.senders[1].state).toContain('routed')
    expect(data.receivers[1].state).toContain('routed')

    data = route('receiver_1').view()

    expect(data.senders[1].state).toContain('routed')
    expect(data.receivers[1].state).toContain('unrouted')
  })
})
