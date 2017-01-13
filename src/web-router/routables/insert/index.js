import Routables from '../'
import clone from 'clone'
import mapSenderFormats from './map-sender-formats'
import mapInitialSenderState from './map-sender-initial-state'
import mapSenderRoutedState from './map-sender-routed-state'
import mapInitialReceiverState from './map-receiver-initial-state'
import mapInitialRouted from './map-initial-routed'
import sortRoutes from './sort-routes'
import mapRoutedReceivers from './map-routed-receivers'

export default ({senders, flows, receivers, routes}) => {
  let routables = () => {
    senders.sort(window.nmos.defaultSort)
    receivers.sort(window.nmos.defaultSort)
    routes.sort(sortRoutes)
    return Routables({senders, flows, receivers, routes})
  }

  senders = senders || []
  flows = flows || []
  receivers = receivers || []
  routes = routes || []

  senders = clone(senders)
  flows = clone(flows)
  receivers = clone(receivers)
  routes = clone(routes)

  return {
    senders (data) {
      senders = clone(data)
      mapSenderFormats({senders, flows})
      mapInitialSenderState({senders})
      mapSenderRoutedState({senders, receivers})

      routes = mapInitialRouted({senders, receivers})

      return routables()
    },
    receivers (data) {
      receivers = clone(data)
      mapInitialReceiverState({receivers})
      mapRoutedReceivers({receivers})

      mapSenderRoutedState({senders, receivers})

      routes = mapInitialRouted({senders, receivers})

      return routables()
    },
    flows (data) {
      flows = clone(data)
      mapSenderFormats({senders, flows})
      return routables()
    }
  }
}
