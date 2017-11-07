const Callbacks = require('./callbacks')
const Status = require('./status')
const Sockets = require('./sockets')

module.exports = (baseUrl, apiVersion, getters, WebSocket, type, downgrade, downgradeVersion) => {
  let callbacks = Callbacks()
  let status = Status()
  let sockets = Sockets({baseUrl, apiVersion, callbacks, status, type, WebSocket, downgrade, downgradeVersion})

  return () => {
    let subscription = {
      connect (options = {}) {
        return sockets.connect(options)
      },
      disconnect (id) {
        return sockets.disconnect(id)
      },
      subscribe (options = {}) {
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
