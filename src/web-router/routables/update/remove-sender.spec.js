import remove from './remove-sender'
import Insert from '../insert'
import generate from '../../../ips-nmos-api/src/stub/generate'

describe('removing receivers', () => {
  let data
  beforeEach(() => {
    window.nmos = {
      defaultSort () {}
    }

    let senders = generate.senders(1)
    senders[0].id = 'sender_id'
    let receivers = generate.receivers(1)
    receivers[0].subscription.sender_id = 'sender_id'

    let insert = Insert({})
    data = insert.senders(senders).view()
    data = insert.receivers(receivers).view()

    let grain = {
      pre: senders[0]
    }
    remove({data, grain})
    remove({data, grain})
  })

  it('changes the sender to removed', () => {
    expect(data.senders[0].state).toContain('removed')
  })

  it('removes sender from matching routes', () => {
    expect(data.routes[0].sender).not.toBeDefined()
  })
})
