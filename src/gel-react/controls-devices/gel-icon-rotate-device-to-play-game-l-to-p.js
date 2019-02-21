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
    { className: 'gel-icon gel-icon-rotate-device-to-play-game-l-to-p', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M21 29H7v-8h11v-2H4v12h20v-4h-3z' }),
    react.createElement('path', { d: 'M20 5v20h12V5H20zm10 17h-8V8h8v14zM11.5 9h.5l-3 3 2 2 6.5-6.5L11 1 9 3l3 3h-.5C5.1 6 0 11.1 0 17.5v.5h3v-.5C3 12.8 6.8 9 11.5 9z' })
  )
}
