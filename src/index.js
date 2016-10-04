import 'normalize.css'
import './index.css'
import drc from './drc'

import main from './main'
import webRouter from './web-router'

drc({
  '/': {
    component: main,
    'web-router(/connections)(/confirmation)(/connections)': {
      component: webRouter
    }
  }
}, true)
