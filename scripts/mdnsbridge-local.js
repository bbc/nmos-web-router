const chalk = require('chalk')
const express = require('express')
var bodyParser = require('body-parser')

let app = express()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(bodyParser.json())

app.get('/x-nmos/node/v1.0/self', function (req, res) {
  res.json({
    'version': '1481114285:857636340',
    'hostname': 'ipstudio-master',
    'caps': {},
    'href': 'http://localhost:12345/',
    'services': [
      {
        'href': 'http://localhost:12345/x-nmos/node/v1.0/self/status/',
        'type': 'urn:x-ipstudio:service:status'
      },
      {
        'href': 'http://localhost:12345/x-nmos/node/v1.0/self/mdnsbridge/',
        'type': 'urn:x-ipstudio:service:mdnsbridge'
      }
    ],
    'label': 'ipstudio-master.rd.bbc.co.uk',
    'id': '4fcb301d-19b5-465f-b419-f9ce1d6656d1'
  })
})

app.get('/x-nmos/node/v1.0/self/mdnsbridge/nmos-query', function (req, res) {
  res.json({
    'representation': [
      {
        'name': 'query_localhost',
        'priority': 0,
        'address': 'localhost',
        'txt': {
          'api_ver': 'v1.0,v1.1',
          'api_proto': 'http',
          'pri': '0'
        },
        'port': 6589
      },
      {
        'name': 'query_external',
        'priority': 888,
        'address': '172.29.94.124',
        'txt': {
          'api_ver': 'v1.0,v1.1',
          'api_proto': 'http',
          'pri': '888'
        },
        'port': 8870
      }
    ]
  })
})

app.get('/', function (req, res) {
  res.send('You did this wrong, go to x-nmos/node/v1.0/self')
})

app.listen(12345, () => {
  console.log('started mdnsbridge at', chalk.blue.bold.underline('http://localhost:12345'))
})
