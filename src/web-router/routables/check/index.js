/*
Check functions are used to change the checked/unchecked state of each routable.
  This affects whether or not they are displayed in the 'Route' view
  check-saved is used to restore checked/unchecked values from browser memory, if used
  check-all and check-none affect all routables visible in the 'Choose' view
*/

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
