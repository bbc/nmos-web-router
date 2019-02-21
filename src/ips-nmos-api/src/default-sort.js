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

function createIs (type) {
  return (side) => {
    return side.format.includes(type)
  }
}

let includes = {
  video: createIs('video'),
  audio: createIs('audio'),
  data: createIs('data'),
  mux: createIs('mux')
}

function compareLabel (left, right) {
  if (left.label.toUpperCase() !== right.label.toUpperCase()) return left.label.toUpperCase() < right.label.toUpperCase() ? -1 : 1
  return left.id.toUpperCase() < right.id.toUpperCase() ? -1 : 1
}

module.exports = function (left, right) {
  let hasFormat = left.format && right.format
  if (hasFormat && left.format === right.format) return compareLabel(left, right)
  else if (hasFormat && includes.video(left)) return -1
  else if (hasFormat && includes.video(right)) return 1
  else if (hasFormat && includes.audio(left)) return -1
  else if (hasFormat && includes.audio(right)) return 1
  else if (hasFormat && includes.data(left)) return -1
  else if (hasFormat && includes.data(right)) return 1
  else if (hasFormat && includes.mux(left)) return -1
  else if (hasFormat && includes.mux(right)) return 1
  else if (!left.hasOwnProperty('format') && !right.hasOwnProperty('format')) return compareLabel(left, right)
  return 0
}
