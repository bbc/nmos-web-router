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

import Routables from '../../routables'

export default (state, action, merge) => {
  let routables = Routables(state.view)
  let data
  if (action.sender.state.includes('contracted')) data = routables.expand(action.sender.id).view()
  else data = routables.contract().view()

  let view = Object.assign({}, state.view, data)
  return merge({view})
}
