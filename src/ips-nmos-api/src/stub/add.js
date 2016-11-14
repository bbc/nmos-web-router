let chance = require('chance')()
let generate = require('./generate')

module.exports = (collections) => {
  function add (type) {
    return (count) => {
      let data = []
      if (count === 'random' || count === undefined) count = chance.natural({min: 1, max: 100})
      else if (Array.isArray(count)) data = count
      else if (typeof count === 'object') data.push(count)
      if (typeof count === 'number') {
        for (let i = 0; i < count; i++) data.push(generate.receiver())
      }
      data.forEach(d => {
        collections[type].insert(d)
      })
    }
  }

  return {
    devices: add('devices'),
    flows: add('flows'),
    nodes: add('nodes'),
    receivers: add('receivers'),
    senders: add('senders'),
    sources: add('sources')
  }
}
