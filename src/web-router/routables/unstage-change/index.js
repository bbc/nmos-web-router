/*
These functions are called from the unstage change reducers
In both cases the state of the relevant routables is updated accordingly
  and routes are updated or removed accordingly
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import sortRoutes from '../common/sort-routes'
import getRoutable from '../common/get-routable'
import unstageRoute from './route'
import unstageUnroute from './unroute'

export default (data) => {
  return (receiverId, senderId, changeType) => {
    data = cloneRoutables(data)
    let receiver = getRoutable(data.receivers, receiverId)
    let sender = getRoutable(data.senders, senderId)

    if (changeType === 'route') {
      unstageRoute({data, sender, receiver})
    } else {
      unstageUnroute({data, sender, receiver})
    }

    data.routes.sort(sortRoutes)

    return View(data)
  }
}
