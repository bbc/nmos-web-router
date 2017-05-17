import cloneRoutables from '../common/clone-routables'
import View from '../view'
import checkForExpired from './check'
import deleteExpired from './delete'

export default (data) => {
  data = cloneRoutables(data)
  return {
    check () {
      checkForExpired(data)
    },
    delete () {
      deleteExpired(data)
      return View(data)
    }
  }
}
