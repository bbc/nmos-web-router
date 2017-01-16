import cloneRoutables from '../common/clone-routables'
import Routables from '..'
import sortRoutes from '../common/sort-routes'
import getRoutable from './get-routable'
import mapRoutableStateToRouted from './map-routables-state-to-routed'
import pushRoute from './push-route'
import unrouteReceivers from './unroute-receivers'

export default (data) => {
  return (receiverId, senderId) => {
    data = cloneRoutables(data)
    let receiver = getRoutable(data.receivers, receiverId)

    unrouteReceivers({data, receiver})

    if (senderId) {
      let sender = getRoutable(data.senders, senderId)
      mapRoutableStateToRouted({sender, receiver})
      pushRoute({data, sender, receiver})
    }

    data.routes.sort(sortRoutes)

    return Routables(data)
  }
}
