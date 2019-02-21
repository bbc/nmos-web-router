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

export default (senders, receivers, changes) => {
  // Could possibly extend this to change the state of the sender and receiver
  // so that nodes don't remain yellow/red
  let removedSenders = senders.filter(sender => {
    return sender.state.includes('removed')
  })
  removedSenders.forEach(sender => {
    changes.forEach(change => {
      if (change.sender.id === sender.id) change.state = 'unavailable-sender'
    })
  })

  let removedReceivers = receivers.filter(receiver => {
    return receiver.state.includes('removed')
  })
  removedReceivers.forEach(receiver => {
    changes.forEach(change => {
      if (change.receiver.id === receiver.id) {
        if (change.state === 'unavailable-sender') change.state = 'unavailable-routables'
        else change.state = 'unavailable-receiver'
      }
    })
  })
}
