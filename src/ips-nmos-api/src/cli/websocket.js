const WebSocketServer = require('ws').Server

module.exports = (nmos, port) => {
  let wss = new WebSocketServer({port})

  wss.on('connection', (ws) => {
    let type = ws.upgradeReq.url.replace(/\//g, '')
    let subscription = nmos.subscription[type]()
    subscription.connect()

    let token = subscription.subscribe({
      update (data) {
        ws.send(JSON.stringify(data))
      }
    })

    nmos[type]().then(data => {
      ws.send(JSON.stringify({
        grain: {
          data
        }
      }))
    })

    ws.on('close', function () {
      subscription.unsubscribe(token)
    })
  })
}
