import clone from 'clone'
import update from './update-flow'
import generate from '../../../ips-nmos-api/src/stub/generate'

describe('updating flows', () => {
  let data
  beforeEach(() => {
    let flow = generate.flow()
    let sender = generate.sender()
    sender.flow_id = flow.id
    sender.format = 'format'
    flow.format = 'format'

    data = {
      senders: [sender],
      flows: [flow]
    }

    let pre = clone(flow)
    let post = clone(flow)
    post.format = 'new-format'

    let grain = {
      pre,
      post
    }

    update({data, grain})
  })

  it('updated the flow in data', () => {
    expect(data.flows.length).toBe(1)
    expect(data.flows[0].format).toBe('new-format')
  })

  it('updates senders with format', () => {
    expect(data.senders[0].format).toBe('new-format')
  })
})
