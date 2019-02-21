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

import Routables from '../routables'
import allVisible from './choose/all-visible'

export default (state, action, merge) => {
  let pathname = action.payload.pathname
  let query = action.payload.query
  let view = Object.assign({}, state.view)
  if (pathname.includes('/web-router/')) {
    if (pathname.includes('/web-router/automatic')) {
      view.location = pathname.replace('/web-router/automatic', '')
    } else {
      view.location = pathname.replace('/web-router/manual', '')
    }
    if (query.search !== '') {
      view.choose.term = query.search
    } else {
      view.choose.term = ''
    }
  }

  let routables = Routables(view)
  let filteredView = routables
    .filter(view.choose.term)
    .view()

  view = Object.assign({}, view, filteredView)

  let allVisibleState = allVisible(routables.view().senders)
  view.choose.allVisibleState.senders = allVisibleState.current

  allVisibleState = allVisible(routables.view().receivers)
  view.choose.allVisibleState.receivers = allVisibleState.current

  return merge({ view })
}
