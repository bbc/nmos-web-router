import routes from './routes'
import generate from '../../../ips-nmos-api/src/stub/generate'

describe('Routes Reducer', () => {
  let receivers = []
  let senders = []
  let reduced

  beforeEach(() => {
    receivers = generate.receivers(2)
    senders = generate.senders(10)

    receivers[1].subscription.sender_id = null
    receivers[0].subscription.sender_id = senders[0].id
    receivers[0].subscription.routed = senders[0]
    receivers[0].subscription.routing = [senders[1]]
    receivers[0].subscription.unrouting = [senders[2]]

    reduced = routes({senders, receivers})
  })

  it('A route has a sender and a receiver', () => {
    expect(reduced[0].sender).toBeDefined()
    expect(reduced[0].receiver).toBeDefined()
  })

  it('A route has state "routed" against the routed sender', () => {
    expect(reduced[0].state).toBe('routed')
    expect(reduced[0].sender.id).toBe(senders[0].id)
  })

  it('A route has state "routing" against all the routed senders', () => {
    expect(reduced[1].state).toBe('routing')
    expect(reduced[1].sender.id).toBe(senders[1].id)
  })

  it('A route has state "unrouting" against all the unrouted senders', () => {
    expect(reduced[2].state).toBe('unrouting')
    expect(reduced[2].sender.id).toBe(senders[2].id)
  })
})
