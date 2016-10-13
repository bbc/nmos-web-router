// import axios from 'axios'
import Loki from 'lokijs'

// const NMOS = 'x-nmos'
// const V1_0 = 'v1.0'
// const QUERY = 'query'
// const NODE = 'node'
// const QUERY_URL = [NMOS, QUERY, V1_0].join('/')
// const NODE_URL = [NMOS, NODE, V1_0].join('/')

const TYPES = [
  'subscriptions',
  'flows',
  'nodes',
  'devices',
  'senders',
  'receivers'
]

function collection (db, type) {
  let collection = db.addCollection(type)
  let data = require(`./stub-data/${type}.json`)
  collection.insert(data)
  return collection
}

function createCollections () {
  let db = new Loki('ips.json')
  let collections = {}
  TYPES.forEach(type => {
    collections[type] = collection(db, type)
  })
  return collections
}

function stripLoki (obj) {
  obj = Object.assign({}, obj)
  delete obj.version
  delete obj.meta
  delete obj['$loki']
  return obj
}

function defaultSort (left, right) {
  if (left.format === right.format || left.format === undefined || right.format === undefined) return left.label.toUpperCase() < right.label.toUpperCase() ? -1 : 1
  else if (left.format.includes('video')) return -1
  else if (right.format.includes('video')) return 1
  else if (left.format.includes('audio')) return -1
  else if (right.format.includes('audio')) return 1
  else if (left.format.includes('data')) return -1
  else if (right.format.includes('data')) return 1
  return 0
}

export default function (options) {
  // let getUrl = options.get
  // let putUrl = options.put
  let stub = options.stub
  let delay = options.delay || 0

  let collections
  if (stub) collections = createCollections()

  function getStub (type, id) {
    return new Promise((resolve, reject) => {
      if (id) {
        let data = stripLoki(collections[type].findOne({ id }))
        if (data && !data.hasOwnProperty('id')) setTimeout(function () {
          reject('404')
        }, delay)
        setTimeout(function () {
          resolve(data)
        }, delay)
      }
      setTimeout(function () {
        resolve(collections[type].data.map(stripLoki).sort(defaultSort))
      }, delay)
    })
  }

  return {
    subscriptions () {
      if (stub) return new Promise((resolve, reject) => {
        resolve(collections.subscriptions.data.map(stripLoki))
      })
    },
    flows (id) {
      if (stub) return getStub('flows', id)
    },
    sources (id) {
      if (stub) return getStub('sources', id)
    },
    nodes (id) {
      if (stub) return getStub('nodes', id)
    },
    devices (id) {
      if (stub) return getStub('devices', id)
    },
    senders (id) {
      if (stub) return getStub('senders', id)
    },
    receivers (id) {
      if (stub) return getStub('receivers', id)
    },
    route (id, sender) {
      if (stub) return new Promise((resolve, reject) => {
        let reciver = collections.receivers.findOne({id})
        reciver.subscription = { sender_id: sender.id }
        resolve(sender)
      })
    },
    unroute (id) {
      if (stub) return new Promise((resolve, reject) => {
        let reciver = collections.receivers.findOne({id})
        reciver.subscription = { sender_id: null }
        resolve({})
      })
    }
  }
}
