import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'

export default (routables, type) => {
  if (window.sessionStorage) {
    let checkedArray = JSON.parse(window.sessionStorage.getItem(`${type}-checked`))
    if (checkedArray && routables.length > 0) {
      checkedArray.forEach(check => {
        routables.forEach(routable => {
          if (check.id === routable.id && check.checked === false) {
            let mapRoutableState = mapState(routable)
            mapRoutableState.uncheck()
            routable.state = mapRoutableState.state()
            routable.stateString = stateToString(routable.state)
          }
        })
      })
    }
  }
}
