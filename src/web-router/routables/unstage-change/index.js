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
UnstageChange is used to remove changes from state and to undo their changes
  to the 'Route' view
*/

import View from '../view'
import sortRoutes from '../common/sort-routes'
import getRoutable from '../common/get-routable'
import unstageRoute from './route'
import unstageUnroute from './unroute'
import unstageMulti from './multi'

export default (data) => {
  return (change) => {
    let receiver = getRoutable(data.receivers, change.receiver.id)
    let sender = getRoutable(data.senders, change.sender.id)
    let subscription = ''
    if (change.subscriptionID) {
      subscription = getRoutable(data.senders, change.subscriptionID)
    }

    if (change.type === 'route') {
      if (change.subscriptionID) unstageMulti({data, sender, receiver, subscription})
      else unstageRoute({data, sender, receiver})
    } else unstageUnroute({data, sender, receiver})

    data.routes.sort(sortRoutes)
    data.changes = data.changes.filter(oneChange => {
      return !(oneChange.receiver.id === change.receiver.id)
    })

    return View(data)
  }
}
