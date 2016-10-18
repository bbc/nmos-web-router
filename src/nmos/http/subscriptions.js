var axios = require('axios')

module.exports = function (baseUrl) {
  return function () {
    axios.get(`${baseUrl}/subscriptions`)
      .then(response => {
        return response.data
      })
  }
}
