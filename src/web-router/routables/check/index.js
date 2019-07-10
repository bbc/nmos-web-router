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
Check functions are used to change the checked/unchecked state of each routable.
  This affects whether or not they are displayed in the 'Route' view
  check-saved is used to restore checked/unchecked values from browser memory, if used
  check-all and check-none affect all routables visible in the 'Choose' view
*/

import View from '../view'
import check from './check'

export default (data) => {
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
