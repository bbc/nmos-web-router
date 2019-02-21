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
Using the sender ID to get the most up-to-date version of the sender
  avoids problems caused by a sender being removed and then coming back online
  while a change is staged (resulting in the change holding an out-of-date copy
  of the sender)
*/

import dispatchError from '../error-dispatcher'

export default (actions) => {
  return (senders, senderID, receiver, subscriptionID) => {
    let sender = senders.filter(sender => {
      return sender.id === senderID
    })[0]
    sender = Object.assign({}, sender)
    delete sender.format
    delete sender.state
    delete sender.stateString
    window.nmos.route({id: receiver.id, sender: sender})
      .then(() => {
        actions.deployRoute({ sender, receiver, subscriptionID })
      })
      .catch(error => {
        if (error.message === 'Network Error') error = `Unable to connect to server, cannot route ${sender.label} to ${receiver.label}`
        dispatchError(actions)(error)
      })
  }
}
