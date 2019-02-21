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

export default (left, right) => {
  left.sender = left.sender || {}
  right.sender = right.sender || {}

  let leftReceiverId = left.receiver.id
  let rightReceiverId = right.receiver.id
  let leftSenderId = left.sender.id
  let rightSenderId = right.sender.id
  if (leftReceiverId === rightReceiverId && leftSenderId === rightSenderId) return 0
  if (leftReceiverId < rightReceiverId && leftSenderId === rightSenderId) return -1
  if (leftReceiverId < rightReceiverId && leftSenderId < rightSenderId) return -2
  if (leftReceiverId < rightReceiverId && leftSenderId > rightSenderId) return -3
  if (leftReceiverId > rightReceiverId && leftSenderId === rightSenderId) return 1
  if (leftReceiverId > rightReceiverId && leftSenderId < rightSenderId) return 2
  if (leftReceiverId > rightReceiverId && leftSenderId > rightSenderId) return 3
  return 0
}
