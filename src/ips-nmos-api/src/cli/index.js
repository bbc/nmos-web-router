const NMOS = require('../index.js')
const serve = require('./serve')
const websocket = require('./websocket')
const repl = require('./repl')

function port (name, defaultPort) {
  let portNumber = process.argv.filter(arg => {
    return arg.includes(`--${name}-port`)
  })[0] || `--${name}-port=${defaultPort}`
  portNumber = parseInt(portNumber.replace(`--${name}-port=`, ''), 10)
  return portNumber
}

let nmos = NMOS({stub: true})

let httpPort = port('http', 6589)
serve(nmos, httpPort)
let wsPort = port('http', 6590)
websocket(nmos, wsPort)
repl(nmos, httpPort, wsPort)
