import add from './add-receiver'
import generate from '../../../ips-nmos-api/src/stub/generate'
import Insert from '../insert'

describe('adding receivers', () => {
  let data
  beforeEach(() => {
    window.nmos = {
      defaultSort () {}
    }

    let receivers = generate.receivers(2)
    receivers[0].id = 'receiver_0'
    receivers[0].subscription.sender_id = null
    receivers[1].id = 'receiver_1'
    receivers[1].subscription.sender_id = 'sender_id_0'

    let senders = generate.senders(2)
    senders[0].id = 'sender_id_0'
    senders[1].id = 'sender_id_1'

    let insert = Insert({})
    data = insert.senders(senders).view()
    data = insert.receivers(receivers).view()

    let newReceiver = generate.receiver()
    newReceiver.id = 'receiver_new'
    newReceiver.subscription.sender_id = 'sender_id_1'

    let grain = {
      pre: {},
      post: newReceiver
    }

    add({data, grain})
    add({data, grain})
  })

  it('adds the new receiver, does not add duplicates', () => {
    expect(data.receivers.length).toBe(3)
  })

  it('updates the sender if new reciver is meant to be routed to it', () => {
    expect(data.receivers[2].state).toContain('routed')
    expect(data.senders[1].state).toContain('routed')
  })

  it('adds the new route if one needs to be created', () => {
    expect(data.routes.length).toBe(2)
  })
})
