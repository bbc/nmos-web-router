import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import mapSenderRoutedState from '../common/map-sender-routed-state'
import insertRoutes from '../insert/insert-routes'

export default ({data, grain}) => {
  let receiver = grain.pre
  data.receivers.forEach(r => {
    if (r.id === receiver.id) {
      r.state = mapState(r).remove().state()
      r.stateString = stateToString(r.state)
      r.timeRemoved = new Date().getTime()
    }
  })
  mapSenderRoutedState(data)
  insertRoutes(data)
}
