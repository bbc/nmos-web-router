import CheckFor from './'
import generate from '../../../ips-nmos-api/src/stub/generate'
import Insert from '../insert'
import RemoveSender from '../update/remove-sender.js'
import RemoveReceiver from '../update/remove-receiver.js'
import StageChange from '../stage-change'

describe('stage-change', () => {
  let data
  let checkFor
  let senders
  let receivers

  beforeEach(() => {
    let sorted = []
    window.nmos = {
      defaultSort (left, right) {
        if (left.hasOwnProperty('flow_id')) sorted.push('sender')
        else if (left.hasOwnProperty('subscription')) sorted.push('receiver')
      }
    }

    senders = generate.senders(1)
    receivers = generate.receivers(1)
    receivers[0].subscription.sender_id = null

    data = {}
    data = Insert(data).senders(senders).view()
    data = Insert(data).receivers(receivers).view()
    data.changes = []
    checkFor = CheckFor(data)

    let stageChange = StageChange(data)
    data = stageChange(data.senders[0].id, data.receivers[0].id, 'route').view()

    let grain = { pre: data.senders[0], post: {} }
    RemoveSender({data, grain})
    grain = { pre: data.receivers[0], post: {} }
    RemoveReceiver({data, grain})
  })

  it('makes state of the change "unavailable-receiver" when the sender is unremoved', () => {
    data = Insert(data).senders(senders).view()
    data = checkFor('removed').view()

    expect(data.changes[0].state).toBe('unavailable-receiver')
  })

  it('makes state of the change "unavailable-sender" when the receiver is unremoved', () => {
    data = Insert(data).receivers(receivers).view()
    data = checkFor('removed').view()

    expect(data.changes[0].state).toBe('unavailable-sender')
  })

  it('makes state of the change "staged" when the sender and receiver are unremoved', () => {
    data = Insert(data).senders(senders).view()
    data = Insert(data).receivers(receivers).view()
    data = checkFor('removed').view()

    expect(data.changes[0].state).toBe('staged')
  })
})
