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

import state from './state'
import hasState from './has-state'

const initial = (sender, mapState, isNew) => {
  if (!hasState(sender.state, ['contracted', 'expanded'])) mapState.contract()
  mapState.selectable()
}

const routed = (sender, mapState, data) => {
  mapState.unroute()
  data.receivers.forEach(receiver => {
    if (receiver.subscription.sender_id === sender.id) mapState.route()
  })
}

export default (data, isNew) => {
  state(data, 'senders', initial, routed, isNew)
}
