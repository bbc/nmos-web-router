/**
 * Copyright 2019 British Broadcasting Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
