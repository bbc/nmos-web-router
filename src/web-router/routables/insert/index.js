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
Insert functions are used to insert a new sender/receiver/flow into the web router
  Routes are inserted afterwards so they are up to date. Part of insert-routes
  is re-staging any staged changes so they are still visible in the 'Route' view
*/

import cloneRoutables from '../common/clone-routables'
import View from '../view'
import insertSenders from './insert-senders'
import insertReceivers from './insert-receivers'
import insertFlows from './insert-flows'

export default (data) => {
  data = cloneRoutables(data)

  return {
    senders (senders) {
      insertSenders(data, senders)
      return View(data)
    },
    receivers (receivers) {
      insertReceivers(data, receivers)
      return View(data)
    },
    flows (flows) {
      insertFlows(data, flows)
      return View(data)
    }
  }
}
