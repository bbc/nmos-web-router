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

import initialise from './initialise-dispatcher'
import update from './update-dispatcher'
import initialiseError from './initialise-error-dispatcher'
import toggleSender from './connections/toggle-sender-dispatcher'
import unroute from './connections/unroute-dispatcher'
import route from './connections/route-dispatcher'
import nodeRendered from './connections/node-rendered-dispatcher'
import search from './choose/search-dispatcher'
import allVisible from './choose/all-visible-dispatcher'
import check from './choose/check-dispatcher'
import alert from './notifications/alert-dispatcher'
import info from './notifications/info-dispatcher'
import allClear from './notifications/all-clear-dispatcher'
import checkForExpired from './check-for-expired-dispatcher'
import changeMode from './change-mode-dispatcher'
import addChange from './confirm/add-change-dispatcher'
import unstageChange from './confirm/unstage-change-dispatcher'
import deployRoute from './confirm/deploy-route-dispatcher'
import deployUnroute from './confirm/deploy-unroute-dispatcher'
import deployBulkRoute from './confirm/deploy-bulk-route-dispatcher'
import signIn from './security/signin-dispatcher'
import signOut from './security/signout-dispatcher'

export default {
  initialise,
  initialiseError,
  toggleSender,
  unroute,
  route,
  nodeRendered,
  update,
  search,
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
  signOut
}
