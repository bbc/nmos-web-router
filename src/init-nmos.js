import axios from 'axios'
import parseURL from './parse-url'

const parsedUrl = parseURL(window.location)
const queryStub = parsedUrl.query('stub').boolean
const queryPriority = parsedUrl.query('priority').number

function topPriority (representations) {
  let lessThanOneHundred = representations
    .filter(representation => {
      return representation.priority <= 100
    })
  lessThanOneHundred.sort((left, right) => {
    if (left.priority < right.priority) return 1
    else if (left.priority < right.priority) return -1
    return 0
  })
  let representation = lessThanOneHundred[lessThanOneHundred.length - 1]
  return `http://${representation.address}:${representation.port}`
}

export default (start) => {
  axios
    .get(`http://${parsedUrl.hostname}:12345/x-nmos/node/v1.0/self/`)
    .then(result => {
      let service = result.data.services.filter(service => {
        return service.type === 'urn:x-ipstudio:service:mdnsbridge'
      })[0]
      let url = service.href + 'nmos-query/'
      return axios.get(url)
    })
    .then(result => {
      let representations = result.data.representation
      let url = topPriority(representations)
      if (queryPriority) {
        let representation = representations
        .filter(representation => {
          return representation.priority === queryPriority
        })[0]
        if (representation) {
          url = `http://${representation.address}:${representation.port}`
        }
      }
      console.log(url)
      start(queryStub, url)
    })
    .catch(error => {
      console.error(error)
      start()
    })
}
