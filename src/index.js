import 'normalize.css'
import './index.css'
import drc from './drc'

import NMOS from './ips-nmos-api/src'

const usestub = window.location.search.includes('stub')

function url (type, defaultUrl) {
  if (window.location.search.includes(`${type}-url=`)) {
    return window.location.search
    .replace('?', '')
    .split('&')
    .filter(query => {
      return query.includes(`${type}-url=`)
    })
    .map(query => {
      return query.replace(`${type}-url=`, '')
    })[0]
  } else return defaultUrl
}

const ipstudioGet = 'http://172.29.94.124:8870'
const ipstudioPut = 'http://172.29.80.138:12345'

let bothUrl = url('both', '')
let getUrl = bothUrl
let putUrl = bothUrl
if (bothUrl === '') {
  getUrl = url('get', ipstudioGet)
  putUrl = url('put', ipstudioPut)
}

window.nmos = NMOS({
  stub: usestub,
  get: getUrl,
  put: putUrl
})

import main from './main'
import webRouter from './web-router'

drc({
  '/': {
    component: main,
    'web-router(/**)': {
      component: webRouter
    }
  }
}, true)
