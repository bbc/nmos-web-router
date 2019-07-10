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

/**
 * Clone the entire data object (`state.view`) so it can
 * be safely mutated before being merged back into state.
 */
export default data => {
  // Provide default fallbacks for any missing required properties
  const defaultData = {
    senders: [],
    flows: [],
    receivers: [],
    routes: [],
    changes: []
  }

  return Object.assign({}, defaultData, clone(data))
}
