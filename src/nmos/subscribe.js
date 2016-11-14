import discovery from './discovery.js'

export default function (options) {
  let sockets = []

  function listen (type, subscription) {
    if (options.hasOwnProperty(type)) {
      let socket = new WebSocket(subscription.ws_href)
      socket.onmessage = (event) => {
        options[type](JSON.parse(event.data))
      }
      sockets.push(socket)
    }
  }

  function stubListen (type) {
    if (options.hasOwnProperty(type)) options[type](require(`./stub-data/${type}.json`))
  }

  function subscribe () {
    discovery().subscriptions().then(subscriptions => {
      subscriptions.forEach((subscription) => {
        let type = subscription.resource_path.replace('/', '')
        if (options.hasOwnProperty(type)) {
          if (window.location.host.includes('localhost')) stubListen(type, subscription)
          else listen(type, subscription) }
      })
    })
  }

  function close () {
    sockets.forEach((socket) => {
      socket.close()
    })
  }

  return {
    subscribe,
    close
  }
}
