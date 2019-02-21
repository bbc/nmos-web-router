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

const expirationTimeMins = 10 // Set the desired timeout in minutes here
// If the value is changed, ensure the corresponding value is changed in './expired.spec.js'
// The timer tick is set in 'ips-web/src/drc.js'
const expirationTimeMS = expirationTimeMins * 60 * 1000

export default (data) => {
  function isExpired (routable) {
    if (routable.state.includes('removed')) {
      if (routable.timeRemoved && routable.state.includes('unchecked')) {
        let timeNow = new Date().getTime()
        let idleMS = timeNow - routable.timeRemoved
        return (idleMS > expirationTimeMS)
      }
    }
    return false
  }

  data.senders = data.senders.filter(sender => {
    return !(isExpired(sender))
  })

  data.receivers = data.receivers.filter(receiver => {
    return !(isExpired(receiver))
  })
}
