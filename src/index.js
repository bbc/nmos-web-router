import 'normalize.css'
import './index.css'
import drc from './drc'

import NMOS from './ips-nmos-api/src'

const usestub = window.location.search.includes('stub')

function url (defaultUrl) {
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

window.nmos = NMOS({
  stub: usestub,
  get: url('http://172.29.94.124:8870')
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
