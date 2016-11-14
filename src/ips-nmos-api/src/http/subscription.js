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
        if (typeof ws.onopen !== undefined) {
          ws.onopen = function () {
            connection = 'open'
          }
        } else {
          ws.on('open', function () {
            connection = 'open'
          })
        }

        if (typeof ws.onmessage !== undefined) {
          ws.onmessage = function (evt) {
            callbacks.forEach(callback => {
              console.log(evt.data)
              callback(JSON.parse(evt.data))
            })
          }
        } else {
          ws.on('message', function (data) {
            callbacks.forEach(callback => {
              callback(data)
            })
          })
        }

        if (typeof ws.onclose !== undefined) {
          ws.onclose = function () {
            connection = 'closed'
          }
        } else {
          ws.on('close', function () {
            connection = 'closed'
          })
        }
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
