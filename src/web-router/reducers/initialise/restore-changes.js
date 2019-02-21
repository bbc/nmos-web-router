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

export default (data, routables) => {
  if (window.sessionStorage) {
    let routableExists = (routables, id) => {
      let routable = routables.filter(routable => { return routable.id === id })[0]
      if (routable) return true
      else return false
    }

    let changes = JSON.parse(window.sessionStorage.getItem('saved-changes'))

    if (changes && changes.length >= 1 && data.senders.length >= 1 && data.receivers.length >= 1) {
      changes.forEach(change => {
        if (routableExists(data.senders, change.sender.id) && routableExists(data.receivers, change.receiver.id)) {
          routables.stageChange(change.sender.id, change.receiver.id, change.type, true)
        }
      })
    }
  }
}
