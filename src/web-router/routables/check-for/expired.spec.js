import CheckFor from './'
import generate from '../../../ips-nmos-api/src/stub/generate'
import Insert from '../insert'
import Remove from '../update/remove-sender.js'
import check from '../check/check'

describe('stage-change', () => {
  let data
  let checkFor
  const elevenMins = 60 * 11 * 1000

  beforeEach(() => {
    let sorted = []
    window.nmos = {
      defaultSort (left, right) {
        if (left.hasOwnProperty('flow_id')) sorted.push('sender')
        else if (left.hasOwnProperty('subscription')) sorted.push('receiver')
      }
    }

    let senders = generate.senders(2)
    let receivers = generate.receivers(2)

    data = {}
    data = Insert(data).senders(senders).view()
    data = Insert(data).receivers(receivers).view()
    data.changes = []
    checkFor = CheckFor(data)

    let grain = {
      pre: senders[0],
      post: {}
    }
    Remove({data, grain})
  })

  it('an unchecked routable removed less than 10 minutes ago does not expire', () => {
    let senderID = data.senders[0].id
    check(data, 'senders', senderID)
    data = checkFor('expired').view()

    expect(data.senders.length).toBe(2)
    expect(data.receivers.length).toBe(2)
  })

  it('a checked routable removed more than 10 minutes ago does not expire', () => {
    data.senders[0].timeRemoved -= elevenMins
    data = checkFor('expired').view()

    expect(data.senders.length).toBe(2)
    expect(data.receivers.length).toBe(2)
  })

  it('an unchecked routable removed more than 10 minutes ago does expire', () => {
    let senderID = data.senders[0].id
    check(data, 'senders', senderID)
    data.senders[0].timeRemoved -= elevenMins
    data = checkFor('expired').view()

    expect(data.senders.length).toBe(1)
    expect(data.receivers.length).toBe(2)
  })
})
