const Disconnect = require('./disconnect')
const connect = require('./connect-socket')
const create = require('./create')

module.exports = ({baseUrl, callbacks, status, type, WebSocket}) => {
  let ws = {
    close () {}
  }
  let disconnect = Disconnect({baseUrl, ws, status})

  return {
    connect (options) {
      options.connection = options.connection || {}
      let body = options.connection
      return create({body, baseUrl, type})
          .then(subscription => {
            if (status.value() === 'closed' || status.value() === 'errored') {
              status.connecting()
              ws = new WebSocket(subscription.data.ws_href)
              disconnect = Disconnect({baseUrl, ws, status})
              connect({ws, callbacks, status})
            }
            return new Promise((resolve, reject) => {
              resolve(subscription)
            })
          })
    },
    disconnect () {
      disconnect()
    }
  }
}
