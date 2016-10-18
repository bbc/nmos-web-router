import stripLoki from './strip-loki'

export default (db, type) => {
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

  collection.modify = (item, changes) => {
    collection.emit('pre', item)
    item = Object.assign({}, item, changes)
    collection.update(item)
  }

  return collection
}
