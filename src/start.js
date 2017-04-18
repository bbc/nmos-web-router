import drc from './drc'
import NMOS from './ips-nmos-api/src'
import main from './main'
import webRouter from './web-router'

export default (stub, url, apiVersion) => {
  window.nmos = NMOS({
    stub,
    url,
    apiVersion
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
