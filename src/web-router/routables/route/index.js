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
Route functions manipulate the state of routables
  The relevant receiver is unrouted by default and then routed to
  the relevant sender, if it is a routing change
*/

import View from '../view'
import sortRoutes from '../common/sort-routes'
import getRoutable from '../common/get-routable'
import mapRoutableStateToRouted from './map-routables-state-to-routed'
import pushRoute from '../common/push-route'
import unrouteReceivers from './unroute-receivers'

export default (data) => {
  return (receiverId, senderId) => {
    let receiver = getRoutable(data.receivers, receiverId)

    unrouteReceivers({data, receiver})

    if (senderId) {
      let sender = getRoutable(data.senders, senderId)
      mapRoutableStateToRouted({sender, receiver})
      pushRoute({data, sender, receiver})
    }

    data.routes.sort(sortRoutes)

    return View(data)
  }
}
