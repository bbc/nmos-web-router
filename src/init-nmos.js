import axios from 'axios'
import parseURL from './parse-url'

const parsedUrl = parseURL(window.location)
const queryStub = parsedUrl.query('stub').boolean
const queryPort = parsedUrl.query('mdnsbridge_port').number || 80
const queryPriority = parsedUrl.query('priority').number

function getPrioritised (representations, queryPriority) {
  var url = ''
  if (queryPriority) {
    let representation = representations
      .filter(representation => {
        return representation.priority === queryPriority
      })[0]
    if (representation) {
      if (representation.address.indexOf(':') > -1) {
        url = `http://[${representation.address}]:${representation.port}`
      } else {
        url = `http://${representation.address}:${representation.port}`
      }
    }
  }
  let lessThanOneHundred = representations
    .filter(representation => {
      return representation.priority < 100
    })
  lessThanOneHundred.sort((left, right) => {
    if (left.priority < right.priority) return 1
    else if (left.priority < right.priority) return -1
    return 0
  })
  let representation = lessThanOneHundred[lessThanOneHundred.length - 1]
  if (representation) {
    if (representation.address.indexOf(':') > -1) {
      url = `http://[${representation.address}]:${representation.port}`
    } else {
      url = `http://${representation.address}:${representation.port}`
    }
  }
  return url
}

export default (start) => {
  axios
    .get(`http://${parsedUrl.hostname}:${queryPort}/x-nmos/node/v1.0/self/`)
    .then(result => {
      let service = result.data.services.filter(service => {
        return service.type.includes('mdnsbridge')
      })[0]
      let url = service.href + 'nmos-query/'
      return axios.get(url)
    })
    .then(result => {
      let representations = result.data.representation
      let url = getPrioritised(representations, queryPriority)
      start(queryStub, url)
    })
    .catch(error => {
      console.error(error)
      start()
    })
}
