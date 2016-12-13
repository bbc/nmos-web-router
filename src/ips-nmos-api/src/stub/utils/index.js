let add = require('../add')
let remove = require('../remove')
let simulation = require('../simulation')
let generate = require('../generate')

let data = {
  devices: require('../data/devices.json'),
  senders: require('../data/senders.json'),
  receivers: require('../data/receivers.json'),
  flows: require('../data/flows.json'),
  nodes: require('../data/nodes.json'),
  sources: require('../data/sources.json')
}

module.exports = function (collections, api) {
  let utils = {
    add: add(collections),
    remove: remove(collections),
    generate,
    reset () {
      Object.keys(collections).forEach(key => {
        if (utils.remove.hasOwnProperty(key)) utils.remove[key](collections[key].data.length)
        if (utils.add.hasOwnProperty(key)) utils.add[key](data[key])
      })
    }
  }

  return Object.assign({}, utils, {simulation: simulation(collections, api, utils)})
}
