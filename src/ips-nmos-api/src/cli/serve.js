const express = require('express')
var bodyParser = require('body-parser')

const types = [
  'devices',
  'flows',
  'nodes',
  'receivers',
  'senders',
  'sources',
  'subscriptions'
]

module.exports = (nmos, port) => {
  let app = express()

  app.use(bodyParser.json())

  app.get(`/subscriptions`, function (req, res) {
    nmos.subscriptions(req.params.id)
      .then(data => {
        res.json(data)
      })
      .catch(error => {
        res.status(404).send(error)
      })
  })

  function add (type) {
    app.get(`/x-nmos/query/v1.0/${type}/:id`, function (req, res) {
      nmos[type](req.params.id)
        .then(data => {
          res.json(data)
        })
        .catch(error => {
          res.status(404).send(error)
        })
    })

    app.put(`/x-nmos/node/v1.0/receivers/:id/target`, function (req, res) {
      nmos.route(req.params.id, req.body)
        .then(data => {
          res.json(data)
        })
        .catch(error => {
          console.log('erored', error)
          res.status(404).send(error)
        })
    })

    app.get(`/x-nmos/query/v1.0/${type}`, function (req, res) {
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

  app.get('/', function (req, res) {
    res.send('You should have a console open and should be talking through that. Anything HTTP API you would have used with NMOS should be available here as well.')
  })

  app.listen(port)
}
