const axios = require('axios')
const constants = require('../constants')

module.exports = ({body, baseUrl, apiVersion, type, downgrade, downgradeVersion}) => {
  body.max_update_rate_ms = body.max_update_rate_ms || 100
  if (downgrade) body.params = {'query.downgrade': `${downgradeVersion}`}
  else body.params = body.params || {}
  if (!body.hasOwnProperty('persist')) body.persist = false
  var secure = baseUrl.startsWith('https')
  if (!body.hasOwnProperty('secure')) body.secure = secure
  body.resource_path = `/${type}`
  return axios.post(`${baseUrl}/${constants.QUERY_URL}/${apiVersion}/subscriptions`, body)
}
