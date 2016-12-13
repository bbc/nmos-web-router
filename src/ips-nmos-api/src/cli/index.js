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
  serve(nmos, httpPort)
  websocket(nmos, wsPort)
  repl(nmos, httpPort, wsPort, replPort)
  client(replPort)
}
