let chance = require('chance')()

module.exports = (collections) => {
  function remove (type) {
    return (count) => {
      let max = collections[type].data.length
      let data = []
      if (count === 'random' || count === undefined) count = chance.natural({min: 1, max: max})
      else if (Array.isArray(count)) data = count
      else if (count > max) count = max

      if (typeof count === 'number') {
        for (let i = 0; i < count; i++) {
          data.push({id: collections[type].data[i].id})
        }
      }

      data.forEach(d => {
        if (typeof d === 'string') d = {id: d}
        let thing = collections[type].findOne({id: d.id})
        collections[type].remove(thing)
      })
    }
  }

  return {
    devices: remove('devices'),
    flows: remove('flows'),
    nodes: remove('nodes'),
    receivers: remove('receivers'),
    senders: remove('senders'),
    sources: remove('sources')
  }
}
