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
    { className: 'gel-icon gel-icon-hail-shower-night', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M19 8.2h-.6c-.8-2.9-3.4-5-6.4-5-3.1 0-5.7 2.1-6.4 5H5c-2.8 0-5 2.2-5 4.9S2.2 18 4.9 18H8v-2.3H4.9c-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6.9 0 1.8.5 2.2 1.3l2-1.2c-.4-.6-.9-1.1-1.4-1.5.4-2 2.2-3.5 4.3-3.5 2.4 0 4.4 2 4.4 4.4 0 .9-.3 1.8-.8 2.5h2.6c.2-.6.4-1.3.5-1.9h.4c1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.2 2.6-2.6 2.6H16v2.3h3c2.7 0 4.9-2.2 4.9-4.9s-2.2-5-4.9-5z' }),
    react.createElement('path', { fill: '#969696', d: 'M31.1 11.4c-3.9 0-7.1-3.2-7.1-7.1 0-1.6.5-3.1 1.5-4.3-3.5.4-6.2 3.4-6.2 7 3.2.2 5.7 2.8 5.7 6 0 .3 0 .6-.1.9.5.1.9.1 1.4.1 2.3 0 4.3-1.1 5.6-2.8-.2.2-.5.2-.8.2z' }),
    react.createElement(
      'g',
      { fill: '#A8A8A8' },
      react.createElement('path', { d: 'M10.3 16l3.1 3.1M11.3 19.7l1.1-4.3M14 17l-4.3 1.1' }),
      react.createElement('circle', { cx: '11.8', cy: '17.6', r: '2.2' }),
      react.createElement(
        'g',
        null,
        react.createElement('path', { d: 'M4.9 20.3L8 23.4M5.9 24L7 19.7M8.6 21.3l-4.3 1.1' }),
        react.createElement('circle', { cx: '6.5', cy: '21.9', r: '2.2' })
      )
    )
  )
}
