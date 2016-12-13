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
