let stripLoki = require('./strip-loki')
let generate = require('./generate')

module.exports = (db, type, data) => {
  let collection = db.addCollection(type)
  if (data === 'random') data = generate[type]()
  else if (typeof data === 'number') data = generate[type](data)
  data = data || require(`./data/${type}.json`)
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
