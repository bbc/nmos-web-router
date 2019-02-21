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

import clone from 'clone'

export default ({data, receiver, sender, staged}) => {
  let route = data.routes.filter(route => {
    return receiver.id === route.receiver.id &&
          sender.id === route.sender.id
  })[0]
  if (route === undefined) {
    route = {
      state: '',
      receiver: clone(receiver),
      sender: clone(sender)
    }
    data.routes.push(route)
  }
  route.state = (staged) ? 'staged-route' : 'routing'
}
