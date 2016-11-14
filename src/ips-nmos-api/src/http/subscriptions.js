var axios = require('axios')
var constants = require('./constants')

module.exports = function (baseUrl) {
  return function () {
    return axios.get(`${baseUrl}/${constants.QUERY_URL}/subscriptions`)
      .then(response => {
        return response.data
      })
  }
}
