import Disconnect from './disconnect'
import Status from './status'

let deletUrl
jest.mock('axios', () => {
  return {
    delete (url) {
      deletUrl = url
      return new Promise((resolve, reject) => {
        resolve()
      })
    }
  }
})

describe('disconnect', () => {
  let status
  let ws
  let disconnect
  let closed

  beforeEach(() => {
    deletUrl = 'not deleted'
    status = Status()
    status.open()

    closed = 'socket was not closed'
    ws = {
      close () {
        closed = 'socket closed'
      }
    }

    disconnect = Disconnect({baseUrl: 'baseUrl', ws, status})
  })

  it('changes status to closed', () => {
    disconnect()

    expect(status.value()).toBe('closed')
  })

  it('closes web socket', () => {
    disconnect()

    expect(closed).toBe('socket closed')
  })

  it('deletes if id is given', () => {
    disconnect('id')
    expect(deletUrl).toBe('baseUrl/x-nmos/query/v1.0/subscriptions/id')
  })
})
