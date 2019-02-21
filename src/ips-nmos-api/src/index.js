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

let Stub = require('./stub')
let Http = require('./http')
let defaultSort = require('./default-sort')

module.exports = function (options) {
  if (!options.hasOwnProperty('WebSocket')) {
    if (typeof window !== 'undefined' && window.WebSocket) options.WebSocket = window.WebSocket
    else options.WebSocket = require('ws')
  }
  let NMOS = Http(options)
  if (options.stub) NMOS = Stub(options.stub)
  NMOS.defaultSort = defaultSort
  if (!options.hasOwnProperty('stub') && !options.hasOwnProperty('url')) {
    NMOS.error = new Error('Can not start nmos without either `stub` or `url` param')
    NMOS.error.type = 'initialise'
  }
  return NMOS
}
