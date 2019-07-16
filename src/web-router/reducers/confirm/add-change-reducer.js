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

import Routables from '../../routables'

export default (state, action, merge) => {
  let updatedView = {}

  // Check to make sure the user is not routing a receiver that is already subscribed
  // to the sender. If this is the case then do nothing.
  if (!(action.receiver.subscription.sender_id === action.sender.id && action.changeType === 'route')) {
    let routables = Routables(state.view)
    updatedView = routables.stageChange(action.sender.id, action.receiver.id, action.changeType, true).view()
  }
  let view = Object.assign({}, state.view, updatedView)

  return merge({view})
}
