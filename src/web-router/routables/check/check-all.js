import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default (routables) => {
  routables.forEach(routable => {
    routable.state = mapState(routable).check().state()
    routable.stateString = stateToString(routable.state)
  })
}