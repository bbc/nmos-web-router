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

export default (senders, receivers) => {
  if (window.sessionStorage) {
    let saveCheckedStatus = (routables, type) => {
      let checkedArray = []
      routables.forEach(routable => {
        let thisRoutable = {id: routable.id, checked: true}
        if (routable.state.includes('unchecked')) thisRoutable.checked = false
        checkedArray.push(thisRoutable)
      })
      if (checkedArray.length > 0) {
        window.sessionStorage.setItem(`${type}-checked`, JSON.stringify(checkedArray))
      }
    }
    saveCheckedStatus(senders, 'senders')
    saveCheckedStatus(receivers, 'receivers')
  }
}
