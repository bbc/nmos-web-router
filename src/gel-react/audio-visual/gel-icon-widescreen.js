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
    { className: 'gel-icon gel-icon-widescreen', xmlns: 'http://www.w3.org/2000/svg', width: '48', height: '32', viewBox: '0 0 48 32' },
    react.createElement('path', { d: 'M0 0h48v32H0z' }),
    react.createElement('path', { fill: '#FFF', d: 'M32.2 18.6c.1 1.9 1.3 2.5 3 2.5 1.3 0 2.6-.4 2.6-1.6 0-1.4-2.3-1.7-4.6-2.3-2.3-.6-4.7-1.7-4.7-4.6C28.5 9 32 7.7 35 7.7c3.2 0 6.4 1.5 6.4 5.1h-4.2c.1-1.5-1.3-1.9-2.6-1.9-.9 0-2 .3-2 1.4 0 1.2 2.3 1.5 4.6 2.1 2.3.7 4.6 1.7 4.6 4.6 0 4-3.4 5.3-7 5.3-3.7 0-6.9-1.6-6.9-5.7h4.3zM23.1 24H19l-2.2-11-2.2 11h-4.2L6 8h4.2l2.3 11.7L14.8 8h3.9l2.4 11.7L23.4 8h4.2l-4.5 16z' })
  )
}
