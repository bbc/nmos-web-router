import Expand from './'
import generate from '../../../ips-nmos-api/src/stub/generate'

describe('expanding', () => {
  let expand
  beforeEach(() => {
    let senders = generate.senders(2)
    senders[0].id = 'sender_id'
    senders[1].format = 'not-matching-0'

    let receivers = generate.receivers(3)
    receivers[0].format = senders[0].format
    receivers[1].format = 'not-matching-1'
    receivers[2].format = 'not-matching-2'

    expand = Expand({senders, receivers})
  })

  it('expands on matching sender id', () => {
    let data = expand('sender_id').view()
    expect(data.senders[0].state).toContain('expanded')
    expect(data.senders[1].state).not.toContain('expanded')
  })

  it('contacts non matching sender id', () => {
    let data = expand('sender_id').view()
    expect(data.senders[0].state).not.toContain('contracted')
    expect(data.senders[1].state).toContain('contracted')
  })

  it('matching receivers are selectable', () => {
    let data = expand('sender_id').view()

    expect(data.receivers[0].state).toContain('selectable')
  })

  it('disables non matching receivers', () => {
    let data = expand('sender_id').view()

    expect(data.receivers[1].state).toContain('disabled')
    expect(data.receivers[2].state).toContain('disabled')
  })

  it('contacts all senders when expand is given no ids', () => {
    let data = expand('sender_id').view()
    expand = Expand(data)
    data = expand().view()

    expect(data.senders[0].state).toContain('contracted')
    expect(data.senders[1].state).toContain('contracted')

    expect(data.receivers[0].state).not.toContain('disabled')
    expect(data.receivers[1].state).not.toContain('disabled')
    expect(data.receivers[2].state).not.toContain('disabled')
  })

  it('enables all receivers when expand is given no ids', () => {
    let data = expand('sender_id').view()
    expand = Expand(data)
    data = expand().view()

    expect(data.receivers[0].state).not.toContain('disabled')
    expect(data.receivers[1].state).not.toContain('disabled')
    expect(data.receivers[2].state).not.toContain('disabled')
  })
})
