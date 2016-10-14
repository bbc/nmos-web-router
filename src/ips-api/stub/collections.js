import Loki from 'lokijs'

let types = [
  'subscriptions',
  'flows',
  'nodes',
  'devices',
  'senders',
  'receivers'
]

function stripLoki (obj) {
  obj = Object.assign({}, obj)
  delete obj.version
  delete obj.meta
  delete obj['$loki']
  return obj
}

function createCollection (db, type) {
  let collection = db.addCollection(type)
  let data = require(`./data/${type}.json`)
  collection.insert(data)

  collection.find = (options) => {
    let data = collection.findOne(options)
    if (data !== null) return stripLoki(data)
    return data
  }

  collection.all = () => {
    return collection.data.map(stripLoki)
  }

  return collection
}

function createCollections () {
  let db = new Loki('ips.json')
  let collections = {}
  types.forEach(type => {
    collections[type] = createCollection(db, type)
  })
  return collections
}

export default createCollections()
