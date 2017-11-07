const Disconnect = require('./disconnect')
const connect = require('./connect-socket')
const create = require('./create')

module.exports = ({baseUrl, apiVersion, callbacks, status, type, WebSocket, downgrade, downgradeVersion}) => {
  let ws = {
    close () {}
  }
  let disconnect = Disconnect({baseUrl, apiVersion, ws, status})

  return {
    connect (options) {
      options.connection = options.connection || {}
      let body = options.connection
      return create({body, baseUrl, apiVersion, type, downgrade, downgradeVersion})
          .then(subscription => {
            if (status.value() === 'closed' || status.value() === 'errored') {
              status.connecting()
              ws = new WebSocket(subscription.data.ws_href)
              disconnect = Disconnect({baseUrl, apiVersion, ws, status})
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
