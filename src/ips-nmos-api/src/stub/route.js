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

module.exports = function (collections, delay) {
  return (id, sender) => {
    sender = sender || {}
    return new Promise((resolve, reject) => {
      function updateRoute (receiver) {
        let senderId = sender.id || null
        let subscription = { sender_id: senderId }
        collections.receivers.modify(receiver, { subscription })
        setTimeout(function () {
          resolve(sender)
        }, delay())
      }

      let receiver = collections.receivers.findOne({ id })
      if (receiver === null) {
        setTimeout(function () {
          reject('404 no receiver')
        }, delay())
      } else if (sender.id) {
        let foundSender = collections.senders.findOne({ id: sender.id })
        if (foundSender === null) {
          setTimeout(function () {
            reject('404 no sender')
          }, delay())
        } else updateRoute(receiver)
      } else updateRoute(receiver)
    })
  }
}
