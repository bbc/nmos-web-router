import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default (data, type, updatedRoutables) => {
  data[type].forEach(routable => {
    updatedRoutables.forEach((updatedRoutable, index) => {
      if (updatedRoutable.id === routable.id) {
        routable.state = mapState(routable).unremove().state()
        routable.stateString = stateToString(routable.state)
      }
    })
  })
}
