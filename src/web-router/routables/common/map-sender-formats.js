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

export default ({senders, flows, changes}) => {
  senders.forEach(sender => {
    let flow = flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0] || {format: 'no'}
    sender.format = flow.format
    if (sender.state && sender.format === 'no') {
      if (!sender.state.includes('removed')) sender.format = 'help'
    }
  })

  if (changes) {
    changes.forEach(change => {
      let flow = flows.filter(flow => {
        return flow.id === change.sender.flow_id
      })[0] || {format: 'no'}
      change.sender.format = flow.format
    })
  }
}
