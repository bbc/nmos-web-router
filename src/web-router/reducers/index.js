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

import initialise from './initialise'
import initialiseError from './initialise-error-reducer'
import toggleSender from './connections/toggle-sender-reducer'
import unroute from './connections/unroute-reducer'
import route from './connections/route-reducer'
import nodeRendered from './connections/node-rendered-reducer'
import update from './update-reducer'
import locationChange from './location-change-reducer'
import allVisible from './choose/all-visible-reducer'
import check from './choose/check-reducer'
import alert from './notifications/alert-reducer'
import info from './notifications/info-reducer'
import allClear from './notifications/all-clear-reducer'
import checkForExpired from './check-for-expired-reducer'
import changeMode from './change-mode-reducer'
import addChange from './confirm/add-change-reducer'
import unstageChange from './confirm/unstage-change-reducer'
import deployRoute from './confirm/deploy-route-reducer'
import deployUnroute from './confirm/deploy-unroute-reducer'
import deployBulkRoute from './confirm/deploy-bulk-route-reducer'
import signIn from './security/signin-reducer'
import signOut from './security/signout-reducer'
import status from './status/status-reducer.js'

export default {
  initialise,
  initialiseError,
  toggleSender,
  unroute,
  route,
  nodeRendered,
  update,
  allVisible,
  check,
  alert,
  info,
  allClear,
  checkForExpired,
  changeMode,
  addChange,
  unstageChange,
  deployRoute,
  deployUnroute,
  deployBulkRoute,
  signIn,
  signOut,
  status,
  all: {
    router: {
      LOCATION_CHANGE: locationChange
    }
  }
}
