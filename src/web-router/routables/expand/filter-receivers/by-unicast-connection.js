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

import mapState from '../../common/map-state'
import stateToString from '../../common/state-to-string'

export default (receivers, unicast) => {
  receivers.forEach(receiver => {
    let receiverMapState = mapState(receiver).notSelectable().enable()
    if (receiver.subscription.sender_id !== unicast.subscription_id) {
      receiverMapState.disable()
      receiver.state = receiverMapState.state()
      receiver.stateString = stateToString(receiver.state)
    }
  })
}
