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
Find the sender relevant to this new change and then check any existing
  changes - if a change regarding the same receiver already exists then
  delete that change before adding the new change
A receiver can only appear once in a list of staged changes
*/

export default (actions) => {
  return (receiver, senders, type, changes) => {
    let sender = ''

    if (type === 'route') {
      sender = senders.filter(sender => {
        return sender.state.includes('expanded')
      })[0]
    } else {
      sender = senders.filter(sender => {
        return sender.id === receiver.subscription.sender_id
      })[0]
    }
    let changeType = type

    if (changes) {
      changes.forEach(change => {
        if (change.receiver.id === receiver.id) {
          actions.unstageChange({change})
        }
      })
    }
    actions.addChange({ sender, receiver, changeType })
  }
}
