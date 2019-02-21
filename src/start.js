/**
 * Copyright 2019 British Broadcasting Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import drc from './drc'
import NMOS from './ips-nmos-api/src'
import main from './main'
import webRouter from './web-router'

export default (stub, url, apiVersion, downgrade, downgradeVersion) => {
  window.nmos = NMOS({
    stub,
    url,
    apiVersion,
    downgrade,
    downgradeVersion
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
