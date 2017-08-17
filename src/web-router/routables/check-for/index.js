/*
CheckFor functions are used to look at the state of routables
  checkForExpired is used to regularly check if any routables have been removed for
    a certain amount of time and to delete them if so
  checkForRemoved/Unremoved are used to check routables and ensure any staged changes
    are up-to-date (displaying 'sender unavailable' etc. if a routable has been removed)
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import checkForExpired from './expired'
import checkForRemoved from './removed'
import checkForUnremoved from './unremoved'

export default (data) => {
  return (checkType) => {
    data = cloneRoutables(data)
    if (checkType === 'expired') checkForExpired(data)
    else {
      checkForUnremoved(data.senders, data.receivers, data.changes)
      checkForRemoved(data.senders, data.receivers, data.changes)
    }

    return View(data)
  }
}
