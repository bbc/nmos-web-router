import fuzzysearch from 'fuzzysearch'
import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default (term, routables) => {
  routables.forEach(routable => {
    let fuzzymatch = fuzzysearch(
      term.toLowerCase(),
      routable.label.toLowerCase()
    ) || fuzzysearch(
      term.toLowerCase(),
      routable.id.toLowerCase()
    )

    let routableMapState = mapState(routable)
    if (fuzzymatch) routableMapState.fuzzymatch()
    else routableMapState.fuzzymissmatch()
    routable.state = routableMapState.state()
    routable.stateString = stateToString(routable.state)
  })
}
