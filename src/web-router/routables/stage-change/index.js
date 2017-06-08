import cloneRoutables from '../common/clone-routables'
import View from '../view'
import sortRoutes from '../common/sort-routes'
import getRoutable from '../common/get-routable'
import stageRoute from './route'
import stageUnroute from './unroute'

export default (data) => {
  return (receiverId, senderId, changeType) => {
    data = cloneRoutables(data)
    let receiver = getRoutable(data.receivers, receiverId)
    let sender = getRoutable(data.senders, senderId)

    if (changeType === 'route') {
      stageRoute({data, sender, receiver})
    } else {
      stageUnroute({data, sender, receiver})
    }

    data.routes.sort(sortRoutes)

    return View(data)
  }
}
