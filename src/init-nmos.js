import axios from 'axios'
import parseURL from './parse-url'

const parsedUrl = parseURL(window.location)
const queryStub = parsedUrl.query('stub').boolean
const queryPriority = parsedUrl.query('priority').number || null
const queryVersion = parsedUrl.query('api_ver').string || 'v1.1'
const queryProtocol = parsedUrl.query('api_proto').string || window.location.protocol.substring(0, window.location.protocol.length - 1)

const httpPort = queryProtocol === 'https' ? 443 : 80
const queryPort = parsedUrl.query('mdnsbridge_port').number || httpPort

const downgrade = !parsedUrl.query('api_no_downgrade').boolean
const downgradeVersion = parsedUrl.query('api_downgrade_version').string || 'v1.0'

function getPrioritised (representations, priority, version, protocol) {
  var url = ''
  if (queryPriority) {
    let representation = representations
      .filter(representation => {
        return representation.priority === priority &&
            representation.versions.indexOf(version) !== -1 &&
            representation.protocol === protocol
      })[0]
    if (representation) {
      if (representation.address.indexOf(':') > -1) {
        url = `${protocol}://[${representation.address}]:${representation.port}`
      } else {
        url = `${protocol}://${representation.address}:${representation.port}`
      }
    }
    return url
  } else {
    let lessThanOneHundred = representations
      .filter(representation => {
        return representation.priority < 100 &&
            representation.versions.indexOf(version) !== -1 &&
            representation.protocol === protocol
      })
    lessThanOneHundred.sort((left, right) => {
      if (left.priority < right.priority) return 1
      else if (left.priority < right.priority) return -1
      return 0
    })
    let representation = lessThanOneHundred[lessThanOneHundred.length - 1]
    if (representation) {
      if (representation.address.indexOf(':') > -1) {
        url = `${protocol}://[${representation.address}]:${representation.port}`
      } else {
        url = `${protocol}://${representation.address}:${representation.port}`
      }
    }
    return url
  }
}

export default (start) => {
  axios
    .get(`${queryProtocol}://${parsedUrl.hostname}:${queryPort}/x-nmos/node/${queryVersion}/self/`)
    .then(result => {
      let service = result.data.services.filter(service => {
        return service.type.includes('mdnsbridge')
      })[0]
      let url = service.href + 'nmos-query/'
      return axios.get(url)
    })
    .then(result => {
      let representations = result.data.representation
      let url = getPrioritised(representations, queryPriority, queryVersion, queryProtocol)
      start(queryStub, url, queryVersion, downgrade, downgradeVersion)
    })
    .catch(error => {
      console.error(error)
      start()
    })
}
