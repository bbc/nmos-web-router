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
