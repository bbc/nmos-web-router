import 'normalize.css'
import './index.css'
import drc from './drc'

import NMOS from './ips-nmos-api/src'

const usestub = window.location.search.includes('stub')
let getUrl = 'http://ipstudio-discovery.rd.bbc.co.uk:8870'
if (window.location.search.includes('get-url=')) {
  getUrl = window.location.search
    .replace('?', '')
    .split('&')
    .filter(query => {
      return query.includes('get-url=')
    })
    .map(query => {
      return query.replace('get-url=', '')
    })[0] }

let putUrl = 'http://172.29.176.55:12345'

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
