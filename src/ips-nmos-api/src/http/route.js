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
    console.log('Using Node API')
    if (href.endsWith('/')) href = href.slice(0, href.length - 1)
    if (!Array.isArray(versions)) versions = ['v1.0']
    var url = `${href}/${constants.NODE_URL}/${maxAPIVersion(versions)}/receivers/${id}/target`
    var options = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    return axios.put(url, sender, options).then(response => { return response.data })
  }

  function routeCM (id, sender, controlHref) {
    console.log('Using Connection Management API')
    if (controlHref.endsWith('/')) controlHref = controlHref.slice(0, controlHref.length - 1)
    var stageUrl = `${controlHref}/single/receivers/${id}/staged`
    var options = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    if (Object.keys(sender).length === 0) {
      // Unsubscribe
      var toPatch = {
        'master_enable': false,
        'activation': {
          'mode': 'activate_immediate'
        }
      }
      return axios.patch(stageUrl, toPatch, options)
      .then(response => {
        if (response.status !== 200) {
          return new Promise((resolve, reject) => {
            reject('Unable to modify Receiver configuration')
          })
        }
        return response.data
      })
    } else {
      // Subscribe
      return axios.get(sender.manifest_href)
      .then(response => {
        if (response.status !== 200) {
          return new Promise((resolve, reject) => {
            reject('Unable to fetch transport file from Sender')
          })
        }
        var toPatch = {
          'sender_id': sender.id,
          'master_enable': true,
          'activation': {
            'mode': 'activate_immediate'
          },
          'transport_file': {
            'data': response.data,
            'type': 'application/sdp'
          }
        }
        return axios.patch(stageUrl, toPatch, options)
      })
      .then(response => {
        if (response.status !== 200) {
          return new Promise((resolve, reject) => {
            reject('Unable to modify Receiver configuration')
          })
        }
        return response.data
      })
    }
  }

  function routeHref (id, sender) {
    return nmos.receivers(id)
    .then(receiver => {
      return nmos.devices(receiver.device_id)
    })
    .then(device => {
      // TODO: Should also check that interface_bindings present in Receiver ie. running API v1.2
      let controlHref = null
      if (device.controls) { // Available from Node API v1.1 onwards
        // Look for connection management API
        let controlURN = 'urn:x-nmos:control:sr-ctrl/v1.0'
        device.controls.forEach(control => {
          if (control.type === controlURN) {
            controlHref = control.href
          }
        })
      }
      if (controlHref) {
        return routeCM(id, sender, controlHref)
      } else {
        // Fall back to old connection management method
        return nmos.nodes(device.node_id).then(node => {
          let versions = ['v1.0'] // Fallback for Node API v1.0
          if (node.api) { // Available from Node API v1.1 onwards
            versions = node.api.versions
          }
          return route(id, sender, node.href, versions)
        })
      }
    })
  }

  return function (id, sender, href, versions) {
    if (typeof href === 'string' && href !== '') return route(id, sender, href, versions)
    return routeHref(id, sender)
  }
}
