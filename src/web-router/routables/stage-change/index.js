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

/*
Stage Change functions are used to push a change into state and to reflect
  it in the UI by changing routable and route states
  These functions are also used to re-stage changes after updates from web socket grains
  The reason for this is that the web socket grains often reset routables and route states
    as staged changes are only stored client side
  StageMulti stages a routing change and also shows that an existing route will be
    broken as a result of the routing change
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import sortRoutes from '../common/sort-routes'
import getRoutable from '../common/get-routable'
import stageRoute from './route'
import stageUnroute from './unroute'
import stageMulti from './multi'

export default (data) => {
  return (senderID, receiverID, changeType, changeIsNew) => {
    data = cloneRoutables(data)
    let receiver = getRoutable(data.receivers, receiverID)
    let sender = getRoutable(data.senders, senderID)
    let subscription = ''

    if (changeType === 'route') {
      if (receiver.state.includes('routed') || (receiver.state.includes('stagedRoute') && !changeIsNew)) {
        subscription = getRoutable(data.senders, receiver.subscription.sender_id)

        if (subscription && subscription.id !== sender.id) stageMulti({data, sender, receiver, subscription})
        else {
          subscription = ''
          stageRoute({data, sender, receiver})
        }
      } else stageRoute({data, sender, receiver})
    } else stageUnroute({data, sender, receiver})

    data.routes.sort(sortRoutes)
    if (changeIsNew) {
      let newChange = {
        sender: sender,
        receiver: receiver,
        type: changeType,
        state: 'staged',
        subscriptionID: subscription.id
      }
      data.changes.push(newChange)
    }

    return View(data)
  }
}
