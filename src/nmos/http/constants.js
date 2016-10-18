var NMOS = 'x-nmos'
var V1_0 = 'v1.0'
var QUERY = 'query'
var NODE = 'node'

module.exports = {
  QUERY_URL: [NMOS, QUERY, V1_0].join('/'),
  NODE_URL: [NMOS, NODE, V1_0].join('/')
}
