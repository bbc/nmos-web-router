import add from './add-receiver'
import generate from '../../../ips-nmos-api/src/stub/generate'
import Insert from '../insert'

describe('adding receivers', () => {
  let data

  it('works', () => {
    // window.nmos = {
    //   defaultSort () {}
    // }
    //
    // let newReceiver = generate.receiver()
    // newReceiver.subscription.sender_id = 'sender_id_1'
    //
    // let receivers = generate.receivers(2)
    // receivers[0].subscription.sender_id = null
    // receivers[1].subscription.sender_id = 'sender_id_0'
    //
    // let senders = generate.senders(2)
    // senders[0].id = 'sender_id_0'
    // senders[1].id = 'sender_id_1'
    //
    // let insert = Insert({})
    // data = insert.senders(senders).view()
    // data = insert.receivers(receivers).view()
    //
    // let grain = {
    //   pre: {},
    //   post: newReceiver
    // }
    //
    // add({data, grain})
    //
    // expect(data.receivers.length).toBe(3)
    // expect(data.receivers[2].state).toContain('routed')
    // expect(data.senders[1].state).toContain('routed')
    // expect(data.routes.length).toBe(2)
  })
})
