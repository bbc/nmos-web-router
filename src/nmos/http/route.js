var axios = require('axios')
var constants = require('./constants')

module.exports = function (baseUrl) {
  return function (id, sender) {
    var url = `${baseUrl}/${constants.NODE_URL}/receivers/${id}/target`
    var options = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    axios
      .put(url, sender, options)
      .then(response => {
        return response.data
      })
  }
}
