import axios from 'axios'
import 'normalize.css'
import './index.css'
import drc from './drc'
import NMOS from './ips-nmos-api/src'
import main from './main'
import webRouter from './web-router'

const usestub = window.location.search.includes('stub')
const priority = window.location.search.includes('priority')

function queryUrl (defaultUrl) {
  if (window.location.search.includes(`url=`)) {
    return window.location.search
    .replace('?', '')
    .split('&')
    .filter(query => {
      return query.includes(`url=`)
    })
    .map(query => {
      return query.replace(`url=`, '')
    })[0]
  } else return defaultUrl
}

function defaultUrl (representations) {
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

let host = window.location.host
host = host.split(':')[0]

axios
  .get(`http://${host}:12345/x-nmos/node/v1.0/self/`)
  .then(result => {
    let service = result.data.services.filter(service => {
      return service.type === 'urn:x-ipstudio:service:mdnsbridge'
    })[0]
    let url = service.href + 'nmos-query/'
    return axios.get(url)
  })
  .then(result => {
    let representations = result.data.representation
    let url = defaultUrl(representations)
    if (priority) {
      let match = window.location.search.match(/\w*priority=(\d*)/g)[0]
      let priority = parseInt(match.split('=')[1])
      let representation = representations
        .filter(representation => {
          return representation.priority === priority
        })[0]
      if (representation) {
        url = `http://${representation.address}:${representation.port}`
      }
    }

    window.nmos = NMOS({
      stub: usestub,
      get: queryUrl(url)
    })
    drc({
      '/': {
        component: main,
        'web-router(/**)': {
          component: webRouter
        }
      }
    }, true)
  })
