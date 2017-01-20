import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import hasState from './has-state'

export default (data, type, initial, routed, isNew) => {
  data[type].forEach(routable => {
    let mapRoutableState = mapState(routable)
    routable.state = routable.state || mapRoutableState.state()
    mapRoutableState.unremove()
    if (!hasState(routable.state, ['checked', 'unchecked']) && isNew) mapRoutableState.uncheck()
    else if (!hasState(routable.state, ['checked', 'unchecked'])) mapRoutableState.check()

    initial(routable, mapRoutableState, isNew, data)
    routed(routable, mapRoutableState, data)

    routable.state = mapRoutableState.state()
    routable.stateString = stateToString(routable.state)
  })
}
