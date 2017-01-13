const Callbacks = require('./callbacks')
const Status = require('./status')
const Sockets = require('./sockets')

module.exports = (baseUrl, getters, WebSocket, type) => {
  let callbacks = Callbacks()
  let status = Status()
  let sockets = Sockets({baseUrl, callbacks, status, type, WebSocket})

  return () => {
    let subscription = {
      connect (options) {
        options = options || {}
        return sockets.connect(options)
      },
      disconnect (id) {
        return sockets.disconnect(id)
      },
      subscribe (options) {
        options = options || {}
        options.connection = options.connection || {}
        return callbacks.push(options)
      },
      unsubscribe (token) {
        callbacks.pop(token)
      },
      status () {
        return status.value()
      }
    }
    return subscription
  }
}
