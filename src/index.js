import axios from 'axios'
import 'normalize.css'
import './index.css'
import drc from './drc'
import NMOS from './ips-nmos-api/src'
import main from './main'
import webRouter from './web-router'

function parseURL (url) {
  let parser = document.createElement('a')
  parser.href = url

  let query = {}
  let queries = parser.search.replace(/^\?/, '').split('&')
  for (let i = 0; i < queries.length; i++) {
    let split = queries[i].split('=')
    let value = split[1] || ''
    query[split[0]] = {}
    query[split[0]].string = value
    query[split[0]].decode = decodeURIComponent(value)
    query[split[0]].number = parseInt(value)
    query[split[0]].boolean = value === 'true' || value === ''
  }
  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    query: function (name) {
      let defaultQuery = {
        boolean: false,
        number: NaN,
        string: '',
        decode: ''
      }
      if (!query.hasOwnProperty(name)) return defaultQuery
      return query[name]
    },
    hash: parser.hash
  }
}

const parsedUrl = parseURL(window.location)
const queryUrl = parsedUrl.query('url').string
const queryStub = parsedUrl.query('stub').boolean
const queryPriority = parsedUrl.query('priority').number

function start (stub, url) {
  window.nmos = NMOS({
    stub,
    get: url
  })

  drc({
    '/': {
      component: main,
      'web-router(/**)': {
        component: webRouter
      }
    }
  }, true)
}

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

if (queryStub || queryUrl) start(queryStub, queryUrl)
else {
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
      start(queryStub, url)
    })
    .catch(error => {
      console.error(error)
      start()
    })
}
