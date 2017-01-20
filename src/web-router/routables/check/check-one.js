import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default (routables, id) => {
  routables.forEach(routable => {
    if (routable.id === id) {
      let mapRoutableState = mapState(routable)
      if (routable.state.includes('checked')) mapRoutableState.uncheck()
      else mapRoutableState.check()
      routable.state = mapRoutableState.state()
      routable.stateString = stateToString(routable.state)
    }
  })
}
