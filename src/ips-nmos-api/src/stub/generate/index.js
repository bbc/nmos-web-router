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

function generate (generateFunc, count) {
  if (count === 'random') count = chance.natural({min: 1, max: 100})
  count = count || chance.natural({min: 1, max: 100})
  let data = []
  for (let i = 0; i < count; i++) data.push(generateFunc())
  return data
}

module.exports = {
  device: require('./device'),
  devices (count) {
    return generate(this.device, count)
  },
  flow: require('./flow'),
  flows (count) {
    return generate(this.flow, count)
  },
  node: require('./node'),
  nodes (count) {
    return generate(this.node, count)
  },
  random: require('./random'),
  randoms (count) {
    return generate(this.random, count)
  },
  receiver: require('./receiver'),
  receivers (count) {
    return generate(this.receiver, count)
  },
  sender: require('./sender'),
  senders (count) {
    return generate(this.sender, count)
  },
  source: require('./source'),
  sources (count) {
    return generate(this.source, count)
  },
  subscription: require('./subscription'),
  subscriptions (count) {
    return generate(this.subscription, count)
  }
}
