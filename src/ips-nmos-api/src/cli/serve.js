const express = require('express')
const bodyParser = require('body-parser')

const types = [
  'devices',
  'flows',
  'nodes',
  'receivers',
  'senders',
  'sources',
  'subscriptions'
]

module.exports = (nmos, httpPort, wsPort) => {
  let app = express()

  app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.use(bodyParser.json())

  app.get(`/x-nmos/query/v1.0/subscriptions`, (req, res) => {
    nmos.subscriptions(req.params.id)
      .then(data => {
        res.json(data)
      })
      .catch(error => {
        res.status(404).send(error)
      })
  })

  app.post('/x-nmos/query/v1.0/subscriptions', (req, res) => {
    let type = req.body.resource_path.replace('/', '')
    let body = req.body
    body.ws_href = `ws://localhost:${wsPort}/${type}`
    nmos.subscription[type]()
      .connect(body)
        .then(data => {
          res.json(data)
        })
        .catch(error => {
          res.status(404).send(error)
        })
  })

  let add = (type) => {
    app.get(`/x-nmos/query/v1.0/${type}/:id`, (req, res) => {
      nmos[type](req.params.id)
        .then(data => {
          res.json(data)
        })
        .catch(error => {
          res.status(404).send(error)
        })
    })

    app.put(`/x-nmos/node/v1.0/receivers/:id/target`, (req, res) => {
      nmos.route({id: req.params.id, sender: req.body})
        .then(data => {
          res.json(data)
        })
        .catch(error => {
          res.status(404).send(error)
        })
    })

    app.get(`/x-nmos/query/v1.0/${type}`, (req, res) => {
      nmos[type]()
        .then(data => {
          res.json(data)
        })
        .catch(error => {
          res.status(404).send(error)
        })
    })
  }

  types.forEach(add)

  app.get('/', (req, res) => {
    res.send('You should have a console open and should be talking through that. Anything HTTP API you would have used with NMOS should be available here as well.')
  })

  app.listen(httpPort)
}
