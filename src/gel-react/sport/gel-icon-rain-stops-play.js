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
    { className: 'gel-icon gel-icon-rain-stops-play', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { fill: '#3F7693', d: 'M0 0h32v32H0z' }),
    react.createElement('path', { fill: '#B3B3B3', d: 'M0 28h32v4H0z' }),
    react.createElement('path', { d: 'M23 8.7h-.6c-.8-2.9-3.4-5-6.4-5-3.1 0-5.7 2.1-6.4 5H9c-2.8 0-5 2.2-5 4.9s2.2 4.9 4.9 4.9H12v-2.3H8.9c-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6.9 0 1.8.5 2.2 1.3l2-1.2c-.4-.6-.9-1.2-1.5-1.6C12.1 7.6 13.9 6 16 6c2.4 0 4.4 2 4.4 4.4 0 .9-.3 1.8-.8 2.5h2.6c.2-.6.4-1.3.5-1.9h.4c1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.2 2.6-2.6 2.6H20v2.3h3c2.7 0 4.9-2.2 4.9-4.9S25.7 8.7 23 8.7z' }),
    react.createElement(
      'g',
      { fill: '#5996CB' },
      react.createElement('path', { d: 'M11.6 24.6s0-.1 0 0l.4-4.7-4 2.3c-.7.4-1.2 1.2-1.2 2.1 0 1.3 1.1 2.4 2.4 2.4 1.2.1 2.2-.9 2.4-2.1zM18.1 18.9s.1-.1 0 0l.4-4.7-4 2.3c-.7.4-1.2 1.2-1.2 2.1 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.3-.9 2.4-2.1z' })
    ),
    react.createElement('path', { d: 'M26 25.9V32h1.9v-7.1c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.1H25v-.1c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.1H22v-.1c0-.5-.4-.9-.9-.9s-.9.4-.9.9V32h1.9v-6.1h1.2V32H25v-6.1h1z' })
  )
}
