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
