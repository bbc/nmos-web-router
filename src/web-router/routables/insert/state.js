import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default (data, type, initial, routed) => {
  data[type].forEach(routable => {
    let mapRoutableState = mapState(routable)
    mapRoutableState.unremove()

    initial(routable, mapRoutableState)
    routed(routable, mapRoutableState, data)

    routable.state = mapRoutableState.state()
    routable.stateString = stateToString(routable.state)
  })
}
