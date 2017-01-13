const axios = require('axios')
const constants = require('../constants')

module.exports = ({body, baseUrl, type}) => {
  body.max_update_rate_ms = body.max_update_rate_ms || 100
  body.params = body.params || {created_by: 'ips-nmos-api'}
  if (!body.hasOwnProperty('persist')) body.persist = false
  if (!body.hasOwnProperty('secure')) body.secure = false
  body.resource_path = `/${type}`
  return axios.post(`${baseUrl}/${constants.QUERY_URL}/subscriptions`, body)
}
