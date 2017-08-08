import UnstageChange from './'
import StageChange from '../stage-change'
import generate from '../../../ips-nmos-api/src/stub/generate'
import Insert from '../insert'

describe('stage-change', () => {
  let data
  let unstageChange

  beforeEach(() => {
    let sorted = []
    window.nmos = {
      defaultSort (left, right) {
        if (left.hasOwnProperty('flow_id')) sorted.push('sender')
        else if (left.hasOwnProperty('subscription')) sorted.push('receiver')
      }
    }

    /* Set up an unrouted sender/receiver pair and a routed sender/receiver pair */

    let senders = generate.senders(2)
    let receivers = generate.receivers(2)

    receivers[0].subscription.sender_id = null
    receivers[1].subscription.sender_id = senders[1].id

    data = {}
    data = Insert(data).senders(senders).view()
    data = Insert(data).receivers(receivers).view()
    data.changes = []
    unstageChange = UnstageChange(data)
    let stageChange = StageChange(data)

    /* Stage a route change and an unroute change to the sender/receiver pairs */

    data = stageChange(data.senders[0].id, data.receivers[0].id, 'route').view()
    data = stageChange(data.senders[1].id, data.receivers[1].id, 'unroute').view()
  })

  it('a routing change is unstaged', () => {
    data = unstageChange(data.changes[0]).view()

    expect(data.changes.length).toBe(1)
    expect(data.changes[0].type).toBe('unroute')
    expect(data.routes.length).toBe(1)
    expect(data.receivers[0].state).toContain('unrouted')
    expect(data.senders[0].state).toContain('unrouted')
  })

  it('an unrouting change is unstaged', () => {
    data = unstageChange(data.changes[1]).view()

    expect(data.changes.length).toBe(1)
    expect(data.changes[0].type).toBe('route')
    expect(data.routes.length).toBe(2)
    expect(data.receivers[1].state).toContain('routed')
    expect(data.senders[1].state).toContain('routed')
  })
})
