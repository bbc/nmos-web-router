import Insert from './insert'
import generate from '../../ips-nmos-api/src/stub/generate'

describe('insert', () => {
  let data
  let sorted
  beforeEach(() => {
    sorted = []
    window.nmos = {
      defaultSort (left, right) {
        if (left.hasOwnProperty('flow_id')) sorted.push('sender')
        else if (left.hasOwnProperty('subscription')) sorted.push('receiver')
      }
    }
    let insert = Insert({})

    let senders = generate.senders(2)
    senders[0].id = 'sender_id'
    senders[0].flow_id = 'flow_id'

    let flows = generate.flows(2)
    flows[0].id = 'flow_id'

    let receivers = generate.receivers(2)
    receivers[0].id = 'receiver_id'
    receivers[0].subscription.sender_id = 'sender_id'
    receivers[1].subscription.sender_id = null

    data = insert.flows(flows).view()
    data = insert.receivers(receivers).view()
    data = insert.senders(senders).view()
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
})
