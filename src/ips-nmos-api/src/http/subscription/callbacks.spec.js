import Callbacks from './callbacks'

describe('callbacks', () => {
  let callbacks
  let updateData
  let errorData
  let lastTriggered
  let token

  beforeEach(() => {
    lastTriggered = 'not triggered'
    updateData = 'no update data'
    errorData = 'no error data'
    callbacks = Callbacks()
    token = callbacks.push({
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
  })

  it('does nothing by default', () => {
    callbacks = Callbacks()

    callbacks.update()
    callbacks.close()
    callbacks.open()
    callbacks.error()

    expect(lastTriggered).toBe('not triggered')
  })

  it('pop removes the callbacks', () => {
    callbacks.pop(token)

    callbacks.update()
    callbacks.close()
    callbacks.open()
    callbacks.error()

    expect(lastTriggered).toBe('not triggered')
  })

  it('updates, with data', () => {
    callbacks.update('update data')

    expect(updateData).toBe('update data')
    expect(lastTriggered).toBe('updated')
  })

  it('errors, with data', () => {
    callbacks.error('error data')

    expect(errorData).toBe('error data')
    expect(lastTriggered).toBe('errored')
  })

  it('opens', () => {
    callbacks.open()

    expect(lastTriggered).toBe('opened')
  })

  it('closes', () => {
    callbacks.close()

    expect(lastTriggered).toBe('closed')
  })
})
