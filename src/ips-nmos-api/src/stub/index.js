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

let Collections = require('./collections')
let Get = require('./get')
let Subscriptions = require('./subscriptions')
let Subscription = require('./subscription')
let Route = require('./route')
let StubUtils = require('./utils')

module.exports = function (options) {
  let collections = Collections(options.data || {})

  let delay = () => { return 0 }
  if (options.delay === 'random') delay = () => { return Math.floor(Math.random() * 3000) }
  else if (options.delay) delay = () => { return options.delay }

  let api = {
    flows: Get(collections, delay, 'flows'),
    sources: Get(collections, delay, 'sources'),
    nodes: Get(collections, delay, 'nodes'),
    devices: Get(collections, delay, 'devices'),
    senders: Get(collections, delay, 'senders'),
    receivers: Get(collections, delay, 'receivers'),
    subscriptions: Subscriptions(collections, delay),
    route: Route(collections, delay),
    unroute: Route(collections, delay, {}, null),
    subscription: Subscription(collections, delay)
  }

  return Object.assign({}, api, {
    stub: StubUtils(collections, api)
  })
}
