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

var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-tube-b', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M32 13h-3.4C27.3 7.3 22.1 3 16 3S4.7 7.3 3.4 13H0v6h3.4C4.7 24.7 9.9 29 16 29s11.3-4.3 12.6-10H32v-6zM16 8c3.3 0 6.2 2.1 7.4 5H8.6c1.2-2.9 4.1-5 7.4-5zm0 16c-3.3 0-6.2-2.1-7.4-5h14.8c-1.2 2.9-4.1 5-7.4 5z' })
  )
}
