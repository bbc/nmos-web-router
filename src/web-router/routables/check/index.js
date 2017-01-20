import cloneRoutables from '../common/clone-routables'
import View from '../view'
import check from './check'

export default (data) => {
  data = cloneRoutables(data)
  return {
    receivers (id) {
      check(data, 'receivers', id)
      return View(data)
    },
    senders (id) {
      check(data, 'senders', id)
      return View(data)
    }
  }
}
