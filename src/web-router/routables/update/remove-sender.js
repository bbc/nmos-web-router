import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import insertRoutes from '../insert/insert-routes'

export default ({data, grain}) => {
  let sender = grain.pre
  data.senders.forEach(s => {
    if (s.id === sender.id) {
      s.state = mapState(s).remove().state()
      s.stateString = stateToString(s.state)
    }
  })
  insertRoutes(data)
}
