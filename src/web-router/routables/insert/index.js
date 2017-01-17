import cloneRoutables from '../common/clone-routables'
import Routables from '..'
import mapSenderFormats from '../common/map-sender-formats'
import mapInitialReceiverState from './map-receiver-initial-state'
import mapRoutedReceivers from './map-routed-receivers'
import mapSenderRoutedState from '../common/map-sender-routed-state'
import mapInitialRouted from './map-initial-routed'
import mapInitialSenderState from './map-sender-initial-state'

export default (data) => {
  data = cloneRoutables(data)

  return {
    senders (senders) {
      data.senders = senders
      mapSenderFormats(data)
      mapInitialSenderState(data)
      mapSenderRoutedState(data)

      data.routes = mapInitialRouted(data)

      data.senders.sort(window.nmos.defaultSort)
      data.receivers.sort(window.nmos.defaultSort)
      return Routables(data)
    },
    receivers (receivers) {
      data.receivers = receivers
      mapInitialReceiverState(data)
      mapRoutedReceivers(data)

      mapSenderRoutedState(data)

      data.routes = mapInitialRouted(data)

      data.senders.sort(window.nmos.defaultSort)
      data.receivers.sort(window.nmos.defaultSort)
      return Routables(data)
    },
    flows (flows) {
      data.flows = flows
      mapSenderFormats(data)
      return Routables(data)
    }
  }
}
