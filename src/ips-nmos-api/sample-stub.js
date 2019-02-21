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

let NMOS = require('./src')

let nmos = NMOS({
  get: 'string:url',
  put: 'string:url',
  stub: true
})

let receiversUpdate = (data) => { console.log('receivers', data) }
let receiversSubscription = nmos.subscription.receivers()
receiversSubscription.connect()
let receiversToken = receiversSubscription.subscribe({
  update: receiversUpdate
})

nmos.stub.simulation.start(500)

setTimeout(function () {
  receiversSubscription.unsubscribe(receiversToken)
}, 3 * 1000)

setTimeout(function () {
  nmos.stub.simulation.stop()
  console.log('stopped')
}, 4 * 1000)

setTimeout(function () {
  console.log('borred now')
  process.exit(0)
}, 5 * 1000)
