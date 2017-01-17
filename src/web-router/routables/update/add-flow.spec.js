import add from './add-flow'
import generate from '../../../ips-nmos-api/src/stub/generate'

describe('adding flows', () => {
  let data
  beforeEach(() => {
    let flow = generate.flow()
    let sender = generate.sender()
    sender.flow_id = flow.id
    flow.format = 'format'

    data = {
      senders: [sender],
      flows: []
    }
    let grain = {
      post: flow,
      pre: {}
    }
    add({data, grain})
    add({data, grain})
  })

  it('adds flow to data, no duplicates', () => {
    expect(data.flows.length).toBe(1)
  })

  it('updates senders with format', () => {
    expect(data.senders[0].format).toBe('format')
  })
})
