import Loki from 'lokijs'

import Collection from './collection'

let types = [
  'subscriptions',
  'flows',
  'nodes',
  'devices',
  'senders',
  'receivers'
]

function createCollections () {
  let db = new Loki('ips.json')
  let collections = {}
  types.forEach(type => { collections[type] = Collection(db, type) })
  return collections
}

export default createCollections()
