const noop = function () {}

module.exports = (WebSocket, subscriptions, type) => {
  let callbacks = []
  let connection = 'closed'
  function connect (onError) {
    connection = 'trying'
    subscriptions()
      .then(subscriptions => {
        let subscription = subscriptions.filter(subscription => {
          return subscription.resource_path === `/${type}`
        })[0]
        if (subscription === undefined) {
          let error = new Error(`Could not subscribe to ${type}`)
          error.type = 'can-not-connect'
          throw error
        }

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
            let error = new Error(`Disconnected from ${type}`)
            error.type = 'disconnected'
            onError(error)
            connection = 'closed'
          }
        } else {
          ws.on('close', function () {
            let error = new Error(`Disconnected from ${type}`)
            error.type = 'disconnected'
            onError(error)
            connection = 'closed'
          })
        }
      })
      .catch(error => {
        connection = 'failed'
        onError(error)
      })
  }

  return {
    subscribe (callback, onError) {
      onError = onError || noop
      if (connection === 'closed') connect(onError)
      callbacks.push(callback)
      return callbacks.length - 1
    },
    unsubscribe (index) {
      callbacks[index] = noop
    }
  }
}
