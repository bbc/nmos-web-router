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

import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default (routables, type) => {
  if (window.sessionStorage) {
    let checkedArray = JSON.parse(window.sessionStorage.getItem(`${type}-checked`))
    if (checkedArray && routables.length > 0) {
      checkedArray.forEach(check => {
        routables.forEach(routable => {
          if (check.id === routable.id && check.checked === false) {
            let mapRoutableState = mapState(routable)
            mapRoutableState.uncheck()
            routable.state = mapRoutableState.state()
            routable.stateString = stateToString(routable.state)
          }
        })
      })
    }
  }
}
