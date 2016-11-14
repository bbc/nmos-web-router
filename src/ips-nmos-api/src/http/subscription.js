const noop = function () {}

module.exports = (WebSocket, subscriptions, type) => {
  let callbacks = []
  let connection = 'closed'
  function connect () {
    connection = 'trying'
    subscriptions()
      .then(subscriptions => {
        let subscription = subscriptions.filter(subscription => {
          return subscription.resource_path === `/${type}`
        })[0]

        var ws = new WebSocket(subscription.ws_href)
        ws.on('open', function () {
          connection = 'open'
        })

        ws.on('message', function (data) {
          callbacks.forEach(callback => {
            callback(data)
          })
        })

        ws.on('open', function () {
          connection = 'closed'
        })
      })
      .catch(error => {
        console.log(error)
        connection = 'failed'
      })
  }

  return {
    subscribe (callback) {
      if (connection === 'closed') connect()
      callbacks.push(callback)
      return callbacks.length - 1
    },
    unsubscribe (index) {
      callbacks[index] = noop
    }
  }
}
