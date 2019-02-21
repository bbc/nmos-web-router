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

const NMOS = require('../index.js')
const serve = require('./serve')
const websocket = require('./websocket')
const repl = require('./repl')
const client = require('./client')

function port (name, defaultPort) {
  let portNumber = process.argv.filter(arg => {
    return arg.includes(`--${name}-port`)
  })[0] || `--${name}-port=${defaultPort}`
  return parseInt(portNumber.replace(`--${name}-port=`, ''), 10) || defaultPort
}

function delay () {
  let delay = process.argv.filter(arg => {
    return arg.includes(`--delay`)
  })[0] || '--delay=0'
  return parseInt(delay.replace('--delay=', ''), 10) || 0
}

let nmos = NMOS({stub: {
  delay: delay()
}})

let connect = process.argv.some(arg => {
  return arg.includes(`--connect`)
})

let replPort = port('repl', 6591)
let httpPort = port('http', 6589)
let wsPort = port('ws', 6590)

if (connect) {
  client(replPort)
} else {
  websocket(nmos, wsPort)
  serve(nmos, httpPort, wsPort)
  repl(nmos, httpPort, wsPort, replPort)
  client(replPort)
}
