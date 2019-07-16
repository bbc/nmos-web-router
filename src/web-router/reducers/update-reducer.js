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
  let routables = Routables(state.view)
  let view = Object.assign({}, state.view, routables.view())
  if (action.name === 'view') return merge({view})

  routables.update[action.name](action.update[action.name])
  routables.filter(state.view.choose.term)
  routables.filter({'transport': 'rtp'})
  if (state.view.routingMode === 'manual') routables.checkFor('removed')

  view = routables.view()

  let sendersAllVisibleState = allVisible(routables.view().senders)
  view.choose.allVisibleState.senders = sendersAllVisibleState.current

  let receiversAllVisibleState = allVisible(routables.view().receivers)
  view.choose.allVisibleState.receivers = receiversAllVisibleState.current

  return merge({view})
}
