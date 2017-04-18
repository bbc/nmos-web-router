var axios = require('axios')
var constants = require('./constants')

module.exports = function (baseUrl, apiVersion) {
  return function () {
    return axios.get(`${baseUrl}/${constants.QUERY_URL}/${apiVersion}/subscriptions`)
      .then(response => {
        return response.data
      })
  }
}
