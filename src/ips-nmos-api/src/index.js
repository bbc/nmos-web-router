let Stub = require('./stub')
let Http = require('./http')
let defaultSort = require('./default-sort')

module.exports = function (options) {
  if (!options.hasOwnProperty('WebSocket')) {
    if (typeof window !== 'undefined' && window.WebSocket) options.WebSocket = window.WebSocket
    else options.WebSocket = require('ws')
  }
  if (!options.hasOwnProperty('put')) options.put = options.get
  let NMOS = Http(options)
  if (options.stub) NMOS = Stub(options.stub)
  NMOS.defaultSort = defaultSort
  return NMOS
}
