import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default (routables) => {
  routables.forEach(routable => {
    if (routable.state.includes('fuzzymatch')) {
      routable.state = mapState(routable).uncheck().state()
      routable.stateString = stateToString(routable.state)
    }
  })
}
