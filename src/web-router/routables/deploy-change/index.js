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
The actual http get/post commands are carried out in the dispatcher
These functions change the state of routables and routes accordingly
*/

import View from '../view'
import getRoutable from '../common/get-routable'
import deployRoute from './route'
import deployUnroute from './unroute'

export default (data) => {
  return (senderID, receiverID, changeType, subscriptionID) => {
    let sender = getRoutable(data.senders, senderID)
    let receiver = getRoutable(data.receivers, receiverID)
    let subscription = ''
    if (subscriptionID) {
      subscription = getRoutable(data.senders, subscriptionID)
    }
    if (changeType === 'route') {
      deployRoute({data, sender, receiver, subscription})
    } else {
      deployUnroute({data, sender, receiver})
    }

    data.changes = data.changes.filter(change => {
      return !(change.receiver.id === receiver.id)
    })

    return View(data)
  }
}
