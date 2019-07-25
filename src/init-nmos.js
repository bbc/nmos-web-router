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

import axios from 'axios'
import parseURL from './parse-url'

const parsedUrl = parseURL(window.location)
const queryStub = parsedUrl.query('stub').boolean
export const queryPriority = parsedUrl.query('priority').number || null
const queryVersion = parsedUrl.query('api_ver').string || 'v1.2'
const nodeVersion = queryVersion || 'v1.2'
const queryProtocol = parsedUrl.query('api_proto').string || window.location.protocol.substring(0, window.location.protocol.length - 1)

const httpPort = queryProtocol === 'https' ? 443 : 80
const queryPort = parsedUrl.query('mdnsbridge_port').number || httpPort

const downgrade = !parsedUrl.query('api_no_downgrade').boolean
const downgradeVersion = parsedUrl.query('api_downgrade_version').string || 'v1.0'
const queryAuth = parsedUrl.query('auth').boolean

function priorityIndexGenerator (representations) {
  let minPriority = representations[0].priority
  let priorityMatches = 0
  representations.forEach(representation => {
    if (representation.priority === minPriority) {
      priorityMatches += 1
    }
  })
  // Pick a number between 0 and priorityMatches-1
  let randomSelection = Math.floor(Math.random() * priorityMatches)
  return randomSelection
}

function getPrioritised (representations, priority, version, protocol) {
  var url = ''
  if (priority) {
    let representation = representations
      .filter(representation => {
        if (!representation.txt.hasOwnProperty('api_auth')) {
          representation.txt.api_auth = false
        }
        return representation.priority === priority &&
            representation.versions.indexOf(version) !== -1 &&
            representation.protocol === protocol &&
            representation.txt.api_auth === queryAuth
      })[0]
    if (representation) {
      if (protocol === 'https') {
        url = `${protocol}://${representation.hostname}:${representation.port}`
      } else if (representation.address.indexOf(':') > -1) {
        url = `${protocol}://[${representation.address}]:${representation.port}`
      } else {
        url = `${protocol}://${representation.address}:${representation.port}`
      }
    }
    return url
  } else {
    let lessThanOneHundred = representations.filter(representation => {
      if (!representation.txt.hasOwnProperty('api_auth')) {
        representation.txt.api_auth = false
      }
      return representation.priority < 100 &&
        representation.versions.indexOf(version) !== -1 &&
        representation.protocol === protocol &&
        representation.txt.api_auth === queryAuth
    })
    if (lessThanOneHundred.length === 0) {
      return ''
    }
    lessThanOneHundred.sort((left, right) => {
      return (left.priority - right.priority)
    })
    let index = priorityIndexGenerator(lessThanOneHundred)
    let representation = lessThanOneHundred[index]
    if (representation) {
      if (protocol === 'https') {
        url = `${protocol}://${representation.hostname}:${representation.port}`
      } else if (representation.address.indexOf(':') > -1) {
        url = `${protocol}://[${representation.address}]:${representation.port}`
      } else {
        url = `${protocol}://${representation.address}:${representation.port}`
      }
    }
    return url
  }
}

export function getServiceUrl (serviceType, apiVersion, priority) {
  return axios
    .get(`${queryProtocol}://${parsedUrl.hostname}:${queryPort}/x-nmos/node/${nodeVersion}/self/`)
    .then(result => {
      let service = result.data.services.filter(service => {
        return service.type.includes('mdnsbridge')
      })[0]
      let url = service.href + serviceType + '/'
      return axios.get(url)
    })
    .then(result => {
      let representations = result.data.representation
      if (representations.length === 0) {
        throw new Error('No ' + serviceType + ' APIs identified from mDNS Bridge')
      }
      let url = getPrioritised(representations, priority, apiVersion, queryProtocol)
      if (url === '') {
        throw new Error('No URL identified for ' + serviceType + ' API')
      }
      return url
    })
}

export default (start) => {
  getServiceUrl('nmos-query', queryVersion, queryPriority)
    .then(url => {
      start(queryStub, url, queryVersion, downgrade, downgradeVersion)
    })
    .catch(error => {
      console.error(error)
      console.warn('Loading stub data as fallback...')
      start(true)
    })
}
