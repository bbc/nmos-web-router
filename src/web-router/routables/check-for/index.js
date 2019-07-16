/**
 * Copyright 2019 British Broadcasting Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
CheckFor functions are used to look at the state of routables
  checkForExpired is used to regularly check if any routables have been removed for
    a certain amount of time and to delete them if so
  checkForRemoved/Unremoved are used to check routables and ensure any staged changes
    are up-to-date (displaying 'sender unavailable' etc. if a routable has been removed)
*/

import View from '../view'
import checkForExpired from './expired'
import checkForRemoved from './removed'
import checkForUnremoved from './unremoved'

export default (data) => {
  return (checkType) => {
    if (checkType === 'expired') checkForExpired(data)
    else {
      checkForUnremoved(data.senders, data.receivers, data.changes)
      checkForRemoved(data.senders, data.receivers, data.changes)
    }

    return View(data)
  }
}
