/**
 * Copyright 2019 British Broadcasting Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var axios = require('axios')
var constants = require('./constants')

export default (nmos, bulkStuff, fallback) => {
  var device = null
  return nmos.devices(bulkStuff.deviceID)
    .then((passedDevice) => {
      device = passedDevice
      let toReturn = getControlHref(device)
      return toReturn
    })
    .then((controlHref) => {
      if (controlHref) {
        return cmBulkRoute(controlHref)
      } else {
        // Fall back to old connection management method
        return nodeApiFallback(device)
      }
    })

  function getControlHref (device) {
    if (device.controls) {
      let controlURN = 'urn:x-nmos:control:sr-ctrl/v1.0'
      let control = device.controls.find((control) => {
        return control.type === controlURN
      })
      if (control) {
        return control.href
      }
    }
  }

  function getTransportFiles (senders) {
    let callGet = (sender) => {
      if (sender) {
        return axios.get(sender.manifest_href)
      }
    }
    let promises = senders.map(callGet)
    return axios.all(promises)
  }

  function checkTransportFileResponses (responses) {
    let checker = (response) => {
      if (response) {
        if (response.status === 200) return response.data
        else throw new Error('Failed getting transport file for one or more senders')
      } else {
        return 'Placeholder'
      }
    }
    return Promise.all(responses.map(checker))
  }

  function createBulkRequests (bulkStuff, transports) {
    let i = 0
    let transportCounter = 0
    let toReturn = []
    let post = bulkStuff.senders.map((sender) => {
      if (sender) {
        toReturn = createBulkPostRequest(sender, bulkStuff.receiverIDs[i], transports[transportCounter])
        transportCounter++
      } else {
        toReturn = createUnRoutingRequest(bulkStuff.receiverIDs[i])
      }
      i++
      return toReturn
    })
    return post
  }

  function createBulkPostRequest (sender, receiverID, transport) {
    return {
      'id': receiverID,
      'params': {
        'master_enable': true,
        'activation': {
          'mode': 'activate_immediate'
        },
        'transport_file': {
          'data': transport,
          'type': 'application/sdp'
        },
        'sender_id': sender.id
      }
    }
  }

  function callCMBulkPost (posts, controlHref) {
    const stageUrl = `${controlHref}/bulk/receivers`
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    return axios.post(stageUrl, posts, options)
  }

  function checkCMBulkResponse (response) {
    if (response.status !== 200) {
      return new Promise((resolve, reject) => {
        reject('Unable to carry out bulk routing')
      })
    }
    return response.data
  }

  function createUnRoutingRequest (receiverID) {
    // Unrouting change so no transport file
    return {
      'id': receiverID,
      'params': {
        'master_enable': false,
        'activation': {
          'mode': 'activate_immediate'
        }
      }
    }
  }

  function cmBulkRoute (controlHref) {
    console.log('Attempting Connection Management API bulk route')
    if (controlHref.endsWith('/')) controlHref = controlHref.slice(0, controlHref.length - 1)
    getTransportFiles(bulkStuff.senders)
      .then(checkTransportFileResponses)
      .then((transports) => { return createBulkRequests(bulkStuff, transports) })
      .then((posts) => { return callCMBulkPost(posts, controlHref) })
      .then(checkCMBulkResponse)
      .catch(error => {
        console.log(error)
        console.log('Error with bulk route request - attempting to fall back to single CM interface')
        singleModeFallback(bulkStuff)
      })
  }

  function singleModeFallback (bulkStuff) {
    let i = 0
    bulkStuff.senders.map((sender) => {
      if (!sender) {
        sender = {}
      }
      let toReturn = fallback(bulkStuff.receiverIDs[i], sender)
      i++
      return toReturn
    })
  }

  function nodeApiFallback (device) {
    return nmos.nodes(device.node_id).then(node => {
      let versions = ['v1.0'] // Fallback for Node API v1.0
      if (node.api) { // Available from Node API v1.1 onwards
        versions = node.api.versions
      }
      return route(bulkStuff.receiverIDs, bulkStuff.senders, node.href, versions)
    })
  }

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
