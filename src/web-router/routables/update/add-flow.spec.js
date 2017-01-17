import add from './add-flow'
import generate from '../../../ips-nmos-api/src/stub/generate'

describe('adding flows', () => {
  it('adds flow to data', () => {
    let flow = generate.flow()
    let sender = generate.sender()
    sender.flow_id = flow.id
    flow.format = 'format'

    let data = {
      senders: [sender],
      flows: []
    }
    let grain = {
      post: flow,
      pre: {}
    }
    add({data, grain})

    expect(data.flows.length).toBe(1)
    expect(data.senders[0].format).toBe('format')
  })
})
