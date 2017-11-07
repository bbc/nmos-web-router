var defaultSort = require('../default-sort')
var axios = require('axios')
var constants = require('./constants')

module.exports = function (baseUrl, apiVersion, name, downgrade, downgradeVersion) {
  return function (id) {
    var url = `${baseUrl}/${constants.QUERY_URL}/${apiVersion}/${name}/`
    if (id) url += `${id}/`
    if (downgrade) url += `?query.downgrade=${downgradeVersion}`
    return axios.get(url)
      .then(function (response) {
        var data = response.data
        if (Array.isArray(response.data)) {
          data = response.data.map(function (d) {
            d.type = name
            return d
          })
          data.sort(defaultSort)
        } else data.type = name
        return data
      })
      .catch(function (error) {
        console.error(error)
      })
  }
}
