var axios = require('axios')
var constants = require('./constants')

export default (nmos, bulkStuff) => {
  return nmos.devices(bulkStuff.deviceID)
  .then(device => {
    let controlHref = null
    if (device.controls) {
      let controlURN = 'urn:x-nmos:control:sr-ctrl/v1.0'
      device.controls.forEach(control => {
        if (control.type === controlURN) {
          controlHref = control.href
        }
      })
    }
    if (controlHref) {
      console.log('Attempting Connection Management API bulk route')
      if (controlHref.endsWith('/')) controlHref = controlHref.slice(0, controlHref.length - 1)
      var stageUrl = `${controlHref}/bulk/receivers`
      // Hack to avoid proxy on r730-3
      // stageUrl = stageUrl.replace('123', '123:8856')

      var options = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }

      let promises = []
      let transports = []
      bulkStuff.senders.forEach(sender => {
        if (sender) {
          let href = sender.manifest_href
          promises.push(axios.get(href))
        }
      })

      // Retrieve the transport files for any senders
      return axios.all(promises)
      .then(responses => {
        responses.forEach(response => {
          if (response.status === 200) transports.push(response.data)
          else transports.push('Placeholder')
        })

        let i = 0
        let transportCounter = 0
        let post = []
        // There should be one sender value for every receiver ID, the value
        // will be null if it is an unrouting change
        bulkStuff.senders.forEach(sender => {
          let thisPost = ''
          // Routing change therefore add in the corresponding transport file
          if (sender) {
            thisPost = {
              'id': bulkStuff.receiverIDs[i],
              'params': {
                'master_enable': true,
                'activation': {
                  'mode': 'activate_immediate'
                },
                'transport_file': {
                  'data': transports[transportCounter],
                  'type': 'application/sdp'
                },
                'sender_id': sender.id
              }
            }
            transportCounter++
          } else {
            // Unrouting change so no transport file
            thisPost = {
              'id': bulkStuff.receiverIDs[i],
              'params': {
                'master_enable': false,
                'activation': {
                  'mode': 'activate_immediate'
                }
              }
            }
          }
          post.push(thisPost)
          i++
        })
        return axios.post(stageUrl, post, options)
      })
      .then(response => {
        if (response.status !== 200) {
          return new Promise((resolve, reject) => {
            reject('Unable to carry out bulk routing')
          })
        }
        return response.data
      })
      .catch(error => {
        console.log('Error with bulk route request!')
        console.log(error)
      })
    } else {
      // Fall back to old connection management method
      return nmos.nodes(device.node_id).then(node => {
        let versions = ['v1.0'] // Fallback for Node API v1.0
        if (node.api) { // Available from Node API v1.1 onwards
          versions = node.api.versions
        }
        return route(bulkStuff.receiverIDs, bulkStuff.senders, node.href, versions)
      })
    }
  })

  function checkNodeResponses (responses) {
    let reject = false
    let failList = []
    responses.forEach(response => {
      if (response.status !== 200 && response.status !== 202) {
        reject = true
        failList.push(response.data.id)
      }
    })
    if (reject) {
      return new Promise((resolve, reject) => {
        reject('Node API bulk routing failed at the following senders/receivers: ' + failList.toString())
      })
    } else {
      return responses
    }
  }

  function route (ids, senders, href, versions) {
    console.log('Attempting to fall back to Node API')
    if (href.endsWith('/')) href = href.slice(0, href.length - 1)
    if (!Array.isArray(versions)) versions = ['v1.0']
    let apiVersion = maxAPIVersion(versions)
    let promises = []
    let i = 0

    var options = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    ids.forEach(id => {
      var url = `${href}/${constants.NODE_URL}/${apiVersion}/receivers/${id}/target`
      let sender = senders[i]
      if (sender == null) sender = {}
      promises.push(axios.put(url, sender, options))
      i++
    })
    // This should fire off the individual PUT requests, need to add something to deal with
    // responses though
    return axios.all(promises)
      .then(checkNodeResponses)
  }

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
}
