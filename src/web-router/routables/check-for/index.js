/*
These functions are called from the add change reducers
In both cases the state of the relevant routables is updated accordingly
  and routes are updated or added accordingly
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import checkForExpired from './check-for-expired'
import deleteExpired from './delete-expired'
import checkForRemoved from './removed'
import checkForUnremoved from './unremoved'

export default (data) => {
  return (checkType) => {
    data = cloneRoutables(data)
    if (checkType === 'expired') {
      checkForExpired(data)
    } else if (checkType === 'delete-expired') {
      deleteExpired(data)
    } else {
      checkForUnremoved(data.senders, data.receivers, data.changes)
      checkForRemoved(data.senders, data.receivers, data.changes)
    }

    return View(data)
  }
}
