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

import clone from 'clone'
import sortRoutes from '../common/sort-routes'
import StageChange from '../stage-change'

export default (data) => {
  function get (routables, id) {
    return routables.filter(routable => {
      return routable.id === id
    })[0]
  }

  let receivers = data.receivers
    .filter(receiver => {
      return receiver.subscription.sender_id !== null && !receiver.state.includes('removed')
    })

  let senders = data.senders
    .filter(sender => {
      return !sender.state.includes('removed')
    })

  data.routes = receivers
    .map(receiver => {
      let sender = get(senders, receiver.subscription.sender_id)
      return {
        state: 'routed',
        receiver: clone(receiver),
        sender: clone(sender)
      }
    })

  if (data.changes) {
    let stageChange = StageChange(data)
    data.changes.forEach(change => {
      stageChange(change.sender.id, change.receiver.id, change.type, false)
    })
  }

  data.routes.sort(sortRoutes)
}
