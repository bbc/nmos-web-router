const axios = require('axios')
const constants = require('../constants')

module.exports = ({baseUrl, apiVersion, ws, status}) => {
  return (id) => {
    status.close()
    ws.close()
    if (id !== undefined) axios.delete(`${baseUrl}/${constants.QUERY_URL}/${apiVersion}/subscriptions/${id}`)
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}
