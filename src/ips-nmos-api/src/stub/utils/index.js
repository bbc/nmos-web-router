let add = require('../add')
let remove = require('../remove')
let simulation = require('../simulation')
let generate = require('../generate')

module.exports = function (collections, api) {
  let utils = {
    add: add(collections),
    remove: remove(collections),
    generate
  }

  return Object.assign({}, utils, {simulation: simulation(collections, api, utils)})
}
