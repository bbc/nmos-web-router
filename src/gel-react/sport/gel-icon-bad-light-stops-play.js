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
    { className: 'gel-icon gel-icon-bad-light-stops-play', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 0h32v32H0z' }),
    react.createElement('circle', { fill: '#FFE710', cx: '11.5', cy: '10.5', r: '1' }),
    react.createElement('circle', { fill: '#FFE710', cx: '8.5', cy: '10.5', r: '1' }),
    react.createElement('circle', { fill: '#FFE710', cx: '8.5', cy: '7.5', r: '1' }),
    react.createElement('circle', { fill: '#FFE710', cx: '11.5', cy: '7.5', r: '1' }),
    react.createElement('circle', { fill: '#FFE710', cx: '11.5', cy: '4.5', r: '1' }),
    react.createElement('circle', { fill: '#FFE710', cx: '8.5', cy: '4.5', r: '1' }),
    react.createElement('path', { fill: '#B3B3B3', d: 'M0 28h32v4H0zM11 28H9l.7-16h.6z' }),
    react.createElement('path', { fill: '#FFF', d: 'M26 25.9V32h1.9v-7.1c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.1H25v-.1c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.1H22v-.1c0-.5-.4-.9-.9-.9s-.9.4-.9.9V32h1.9v-6.1h1.2V32H25v-6.1h1z' })
  )
}
