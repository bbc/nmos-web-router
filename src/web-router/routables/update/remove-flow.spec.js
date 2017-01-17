import remove from './remove-flow'
import generate from '../../../ips-nmos-api/src/stub/generate'

describe('adding flows', () => {
  let data
  beforeEach(() => {
    let flow = generate.flow()
    let sender = generate.sender()
    sender.flow_id = flow.id
    sender.format = 'faken'
    flow.format = 'format'

    data = {
      senders: [sender],
      flows: [flow]
    }
    let grain = {
      post: {},
      pre: flow
    }
    remove({data, grain})
    remove({data, grain})
  })

  it('removes flow to data', () => {
    expect(data.flows.length).toBe(0)
  })

  it('updates senders with format', () => {
    expect(data.senders[0].format).toBe('no')
  })
})
