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

import expandedMediaType from './expanded-media-type'
import expandedFormat from './expanded-format'
import filterReceivers from './filter-receivers'

export default (data, id, unicast) => {
  let mediaType = ''
  let format = ''

  if (!unicast.subscription_id) {
    data.receivers.forEach(receiver => {
      if (receiver.caps.media_types && !mediaType) mediaType = expandedMediaType({senders: data.senders, id, flows: data.flows})
    })
    format = expandedFormat({senders: data.senders, id})
  }
  filterReceivers(data.receivers, mediaType, format, unicast)
}
