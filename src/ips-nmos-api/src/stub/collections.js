let Loki = require('lokijs')
let Collection = require('./collection')

let types = [
  'subscriptions',
  'flows',
  'nodes',
  'devices',
  'senders',
  'receivers',
  'sources'
]

function createCollections (data) {
  data = data || {}
  let db = new Loki('ips.json')
  let collections = {}
  types.forEach(type => { collections[type] = Collection(db, type, data[type]) })
  // TODO: make the generated data consistent unless data === {}
  return collections
}

module.exports = createCollections
