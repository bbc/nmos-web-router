import cloneRoutables from '../common/clone-routables'
import Routables from '..'
import mapInitialRouted from './map-initial-routed'
import insertSenders from './insert-senders'
import insertReceivers from './insert-receivers'
import insertFlows from './insert-flows'

export default (data) => {
  data = cloneRoutables(data)

  return {
    senders (senders) {
      insertSenders(data, senders)
      data.routes = mapInitialRouted(data)
      return Routables(data)
    },
    receivers (receivers) {
      insertReceivers(data, receivers)
      data.routes = mapInitialRouted(data)
      return Routables(data)
    },
    flows (flows) {
      insertFlows(data, flows)
      return Routables(data)
    }
  }
}
