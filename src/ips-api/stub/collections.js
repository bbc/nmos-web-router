import Loki from 'lokijs'
import stripLoki from './strip-loki'

let types = [
  'subscriptions',
  'flows',
  'nodes',
  'devices',
  'senders',
  'receivers'
]

function createCollection (db, type) {
  let collection = db.addCollection(type)
  let data = require(`./data/${type}.json`)
  collection.insert(data)

  collection.find = (query) => {
    let data = collection.findOne(query)
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
  collections.db = db
  return collections
}

export default createCollections()
