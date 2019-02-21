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

export default (data, id, unicast) => {
  let expandedSender = data.senders.filter(sender => {
    return sender.id === id
  })[0]

  if (expandedSender && expandedSender.transport.includes('rtp.ucast')) unicast.inUse = true

  if (unicast.inUse) {
    let subscribedReceiver = data.receivers.filter(receiver => {
      return receiver.subscription.sender_id === expandedSender.id
    })[0]
    if (subscribedReceiver) {
      unicast.subscription_id = expandedSender.id
    }
  }
}
