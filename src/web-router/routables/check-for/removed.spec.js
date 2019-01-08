import CheckFor from './'
import generate from '../../../ips-nmos-api/src/stub/generate'
import Insert from '../insert'
import RemoveSender from '../update/remove-sender.js'
import RemoveReceiver from '../update/remove-receiver.js'
import StageChange from '../stage-change'

describe('stage-change', () => {
  let data
  let checkFor

  beforeEach(() => {
    let sorted = []
    window.nmos = {
      defaultSort (left, right) {
        if (left.hasOwnProperty('flow_id')) sorted.push('sender')
        else if (left.hasOwnProperty('subscription')) sorted.push('receiver')
      }
    }

    let senders = generate.senders(1)
    let receivers = generate.receivers(1)
    receivers[0].subscription.sender_id = null

    data = {}
    data = Insert(data).senders(senders).view()
    data = Insert(data).receivers(receivers).view()
    data.changes = []
    checkFor = CheckFor(data)

    let stageChange = StageChange(data)
    data = stageChange(data.senders[0].id, data.receivers[0].id, 'route', true).view()
  })

  it('removing the sender makes the change state "unavailable-sender"', () => {
    let grain = { pre: data.senders[0] }
    RemoveSender({data, grain})
    data = checkFor('removed').view()

    expect(data.changes[0].state).toBe('unavailable-sender')
  })

  it('removing the receiver makes the change state "unavailable-receiver"', () => {
    let grain = { pre: data.receivers[0] }
    RemoveReceiver({data, grain})
    data = checkFor('removed').view()

    expect(data.changes[0].state).toBe('unavailable-receiver')
  })

  it('removing both the sender and receiver makes the change state "unavailable-routables"', () => {
    let grain = { pre: data.senders[0] }
    RemoveSender({data, grain})
    grain = { pre: data.receivers[0] }
    RemoveReceiver({data, grain})
    data = checkFor('removed').view()

    expect(data.changes[0].state).toBe('unavailable-routables')
  })
})
