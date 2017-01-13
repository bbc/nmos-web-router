import connect from './connect-socket'
import Callbacks from './callbacks'
import Status from './status'

describe('connect', () => {
  let ws
  let callbacks
  let status
  let lastTriggered
  let updateData
  let errorData

  beforeEach(() => {
    ws = {}
    callbacks = Callbacks()
    callbacks.push({
      update (data) {
        lastTriggered = 'updated'
        updateData = data
      },
      error (error) {
        lastTriggered = 'errored'
        errorData = error
      },
      open () {
        lastTriggered = 'opened'
      },
      close () {
        lastTriggered = 'closed'
      }
    })
    status = Status()

    connect({ws, callbacks, status})
  })

  it('changes status to open when web socket is opened', () => {
    ws.onopen()

    expect(status.value()).toBe('open')
  })

  it('changes status to closed when web socket is closed', () => {
    ws.onclose()

    expect(status.value()).toBe('closed')
  })

  it('changes status to error when web socket has errored', () => {
    ws.onerror()

    expect(status.value()).toBe('error')
  })

  it('calls the open callback', () => {
    ws.onopen()

    expect(lastTriggered).toBe('opened')
  })

  it('parses the data from evt on message', () => {
    ws.onmessage({data: '{}'})

    expect(lastTriggered).toBe('updated')
    expect(updateData).toEqual({})
  })

  it('passes the error from an error', () => {
    ws.onerror('error data')

    expect(lastTriggered).toBe('errored')
    expect(errorData).toBe('error data')
  })

  it('calls the close callback', () => {
    ws.onclose()

    expect(lastTriggered).toBe('closed')
  })
})
