import add from './add-sender'
import generate from '../../../ips-nmos-api/src/stub/generate'
import Insert from '../insert'

describe('adding receivers', () => {
  let data
  beforeEach(() => {
    window.nmos = {
      defaultSort () {}
    }

    let receivers = generate.receivers(2)
    receivers[0].subscription.sender_id = null
    receivers[1].subscription.sender_id = 'sender_id_0'

    let senders = generate.senders(1)
    senders[0].id = 'sender_id_x'

    let insert = Insert({})
    data = insert.senders(senders).view()
    data = insert.receivers(receivers).view()

    let newSender = generate.sender()
    newSender.id = 'sender_id_0'

    let grain = {
      pre: {},
      post: newSender
    }

    add({data, grain})
    add({data, grain})
  })

  it('adds the new sender, no duplicates', () => {
    expect(data.senders.length).toBe(2)
  })

  it('updates the receiver if new sender is meant to be routed to it', () => {
    expect(data.senders[1].state).toContain('routed')
  })

  it('updates the route if new sender is routed', () => {
    expect(data.routes[0].sender).toBeDefined()
  })
})
