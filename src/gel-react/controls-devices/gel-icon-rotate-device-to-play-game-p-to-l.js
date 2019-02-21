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
    { className: 'gel-icon gel-icon-rotate-device-to-play-game-p-to-l', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M3 7h8v11h2V4H1v20h4v-3H3z' }),
    react.createElement('path', { d: 'M7 20v12h20V20H7zm17 10H10v-8h14v8zM23 11.5v.5l-3-3-2 2 6.5 6.5L31 11l-2-2-3 3v-.5C26 5.1 20.9 0 14.5 0H14v3h.5c4.7 0 8.5 3.8 8.5 8.5z' })
  )
}
