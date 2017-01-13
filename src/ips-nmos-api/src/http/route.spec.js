const NMOS = require('../index')
const generate = require('../stub/generate')

const receiver = generate.receiver()
const sender = generate.sender()
const device = generate.device()
const node = generate.node()

let nmos = NMOS({
  stub: {
    data: {
      senders: [sender],
      receivers: [receiver],
      devices: [device],
      nodes: [node]
    }
  }
})
const route = require('./route')(nmos)

jest.mock('axios', () => {
  return {
    put (url) {
      let data

      return new Promise((resolve, reject) => {
        if (url === 'nodeHref/x-nmos/node/v1.0/receivers/receiverId/target') data = 'routed using node'
        else if (url === 'href/x-nmos/node/v1.0/receivers/receiverId/target') data = 'routed using href'
        resolve({data})
      })
    }
  }
})

describe('routing', () => {
  beforeEach(function () {
    sender.id = 'senderId'

    receiver.id = 'receiverId'
    receiver.device_id = 'deviceId'
    receiver.subscription.sender_id = null

    device.id = 'deviceId'
    device.node_id = 'nodeId'

    node.id = 'nodeId'
    node.href = 'nodeHref'
  })

  it('will route when given a receiver id and sender, it first calls devices then nodes to get the href', (done) => {
    route('receiverId', {id: 'senderId'})
      .then(data => {
        expect(data).toBe('routed using node')
        done()
      })
      .catch(error => {
        fail(error)
        done()
      })
  })

  it('will route when given a receiver id and sender and uses it\'s own href', (done) => {
    route('receiverId', {id: 'senderId'}, 'href')
      .then(data => {
        expect(data).toBe('routed using href')
        done()
      })
      .catch(error => {
        fail(error)
        done()
      })
  })
})
