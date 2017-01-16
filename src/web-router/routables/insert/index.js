import Routables from '../'
import clone from 'clone'
import cloneRoutables from '../common/clone-routables'
import mapSenderFormats from './map-sender-formats'
import mapInitialSenderState from './map-sender-initial-state'
import mapSenderRoutedState from '../common/map-sender-routed-state'
import mapInitialReceiverState from './map-receiver-initial-state'
import mapInitialRouted from './map-initial-routed'
import sortRoutes from '../common/sort-routes'
import mapRoutedReceivers from './map-routed-receivers'

export default (data) => {
  data = cloneRoutables(data)
  let senders = data.senders
  let receivers = data.receivers
  let flows = data.flows
  let routes = data.routes

  let routables = () => {
    senders.sort(window.nmos.defaultSort)
    receivers.sort(window.nmos.defaultSort)
    routes.sort(sortRoutes)
    return Routables({senders, flows, receivers, routes})
  }

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
