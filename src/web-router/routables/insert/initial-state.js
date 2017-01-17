import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default (routables, setState) => {
  routables.forEach(routable => {
    let mapRoutableState = mapState(routable)
    if (!routable.hasOwnProperty('state')) setState(mapRoutableState)
    mapRoutableState.unremove()
    routable.state = mapRoutableState.state()
    routable.stateString = stateToString(routable.state)
  })
}
