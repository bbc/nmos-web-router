const WebSocketServer = require('ws').Server

module.exports = (nmos, port) => {
  let wss = new WebSocketServer({port})

  wss.on('connection', function connection (ws) {
    let type = ws.upgradeReq.url.replace(/\//g, '')

    let token = nmos.subscription[type].subscribe((data) => {
      ws.send(JSON.stringify(data))
    })

    nmos[type]().then(data => {
      ws.send(JSON.stringify({
        grain: {
          data
        }
      }))
    })

    ws.on('close', function () {
      nmos.subscription[type].unsubscribe(token)
    })
  })
}
