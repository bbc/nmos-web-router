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
    { className: 'gel-icon gel-icon-close-of-play', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { fill: '#4E7A22', d: 'M0 28h32v4H0z' }),
    react.createElement('path', { d: 'M30 22v-3H19v.7L15.9 16H13l-2.9 2.9.2 2.3.4 3.2-2.9-6.7-1.1 1.1 1.9 7.3 2.4.7V32h8.9l-1-5.9.9-4.1zM14.8 14.2c-1 .2-2 0-2.7-.5l1.1-6.3h.1c1.9-.4 3.8.7 4.2 2.6.3 1.9-.9 3.8-2.7 4.2zM9 15.7c0-.5-.3-1-.8-1.1-.1-.3-.3-.6-.6-.9-1-1-2.6-1-3.6 0s-1 2.6 0 3.6h.1c-.9 1.2-1.4 2.3-1 2.7.5.5 2.1-.3 3.6-1.8.3-.2.5-.4.6-.6l.3-.3c.2-.1.3-.3.4-.4.6-.1 1-.6 1-1.2z' })
  )
}
