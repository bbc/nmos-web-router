var axios = require('axios')
var constants = require('./constants')

module.exports = function (nmos) {
  function route (id, sender, href) {
    if (href.endsWith('/')) href = href.slice(0, href.length - 1)
    var url = `${href}/${constants.NODE_URL}/receivers/${id}/target`
    var options = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    return axios.put(url, sender, options).then(response => { return response.data })
  }

  function routeHref (id, sender) {
    return nmos.receivers(id)
    .then(receiver => {
      return nmos.devices(receiver.device_id)
    })
    .then(device => {
      return nmos.nodes(device.node_id)
    })
    .then(node => {
      return route(id, sender, node.href)
    })
  }

  return function (id, sender, href) {
    if (typeof href === 'string' && href !== '') return route(id, sender, href)
    return routeHref(id, sender)
  }
}
