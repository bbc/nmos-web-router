/*
These functions are called from the deploy change reducers
In both cases the state of the relevant routables is updated accordingly
  and routes are updated or removed accordingly
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import getRoutable from '../common/get-routable'
import deployRoute from './route'
import deployUnroute from './unroute'

export default (data) => {
  return (receiverId, senderId, changeType) => {
    data = cloneRoutables(data)
    let sender = getRoutable(data.senders, senderId)
    let receiver = getRoutable(data.receivers, receiverId)
    if (changeType === 'route') {
      deployRoute({data, sender, receiver})
    } else {
      deployUnroute({data, sender, receiver})
    }

    return View(data)
  }
}
