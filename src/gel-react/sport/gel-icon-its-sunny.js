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
    { className: 'gel-icon gel-icon-its-sunny', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { fill: '#3F7693', d: 'M0 0h32v32H0z' }),
    react.createElement(
      'g',
      { fill: '#F8D34C' },
      react.createElement('circle', { cx: '16', cy: '13.1', r: '7.1' }),
      react.createElement('path', { d: 'M17.2 4.8h-2.4V0h2.4v4.8zM10.9 6.5L8.5 2.3l2-1.1 2.4 4.1-2 1.2zM21.5 24.9l-2.4-4.1 2-1.2 2.4 4.2-2 1.1zM26.7 20.6l-4.1-2.4 1.1-2 4.2 2.4-1.2 2zM7.7 14.2H2.9v-2.3h4.8v2.3zM29.1 14.2h-4.8v-2.3h4.8v2.3zM5.3 20.6l-1.2-2 4.2-2.4 1.1 2-4.1 2.4zM23.7 9.9l-1.1-2 4.1-2.4 1.2 2-4.2 2.4zM21.1 6.5l-2-1.2 2.4-4.1 2 1.1-2.4 4.2zM10.5 24.9l-2-1.1 2.4-4.2 2 1.2-2.4 4.1zM17.2 26.1h-2.4v-4.8h2.4v4.8zM8.3 9.9L4.1 7.5l1.2-2 4.1 2.4-1.1 2z' })
    ),
    react.createElement('path', { fill: '#4E7A22', d: 'M0 28h32v4H0z' }),
    react.createElement('path', { d: 'M26 25.9V32h1.9v-7.1c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.1H25v-.1c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.1H22v-.1c0-.5-.4-.9-.9-.9s-.9.4-.9.9V32h1.9v-6.1h1.2V32H25v-6.1h1z' })
  )
}
