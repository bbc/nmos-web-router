const NMOS = 'x-nmos'
const V1_0 = 'v1.0'
const QUERY = 'query'
const NODE = 'node'

export default {
  QUERY_URL: [NMOS, QUERY, V1_0].join('/'),
  NODE_URL: [NMOS, NODE, V1_0].join('/')
}
