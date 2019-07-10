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
Update functions add or remove senders/receivers/flows according to incoming websocket
  grains. The adding is done by functions in routables/insert
  To 'remove' a routable is to change its state to removed so that it appears greyed out
    in the UI. It is not actually deleted from the relevant array unless it expires
*/

import Flows from './flows'
import Receivers from './receivers'
import Senders from './senders'

export default (data) => {
  return {
    flows: Flows(data),
    receivers: Receivers(data),
    senders: Senders(data)
  }
}
