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

const initial = (receiver, mapState, isNew, data) => {
  if (data.expanded && data.expanded.state && data.expanded.state.includes('expanded')) mapState.contract().selectable()
  else mapState.contract().notSelectable()
}

const routed = (receiver, mapState) => {
  mapState.unroute()
  if (receiver.subscription.sender_id !== null) mapState.route()
}

export default (data, isNew) => {
  state(data, 'receivers', initial, routed, isNew)
}
