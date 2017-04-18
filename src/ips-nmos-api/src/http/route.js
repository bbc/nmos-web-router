var axios = require('axios')
var constants = require('./constants')

module.exports = function (nmos) {
  function maxAPIVersion (versions) {
    let major = 1
    let minor = 0
    versions.forEach(version => {
      let versionBits = version.slice(1).split('.')
      if (versionBits[0] > major || (versionBits[0] === major && versionBits[1] > minor)) {
        major = versionBits[0]
        minor = versionBits[1]
      }
    })
    return 'v' + major + '.' + minor
  }

  function route (id, sender, href, versions) {
    if (href.endsWith('/')) href = href.slice(0, href.length - 1)
    if (typeof versions !== Array) versions = ['v1.0']
    var url = `${href}/${constants.NODE_URL}/${maxAPIVersion(versions)}/receivers/${id}/target`
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
      if (device.controls) {
        // Do new conn mgmt
      }
      return nmos.nodes(device.node_id)
    })
    .then(node => {
      let versions = ['v1.0'] // Fallback for Node API v1.0
      if (node.api) { // Available from Node API v1.1 onwards
        versions = node.api.versions
      }
      return route(id, sender, node.href, versions)
    })
  }

  return function (id, sender, href, versions) {
    if (typeof href === 'string' && href !== '') return route(id, sender, href, versions)
    return routeHref(id, sender)
  }
}
