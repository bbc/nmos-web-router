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
    { className: 'gel-icon gel-icon-heavy-snow-shower-night', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M19 8.3h-.6c-.8-2.9-3.4-5-6.4-5-3.1 0-5.7 2.1-6.4 5H5c-2.8 0-5 2.2-5 4.9s2.2 4.9 4.9 4.9H8v-2.3H4.9c-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6.9 0 1.8.5 2.2 1.3l2-1.2c-.4-.6-.9-1.2-1.5-1.6.4-2 2.2-3.5 4.3-3.5 2.4 0 4.4 2 4.4 4.4 0 .9-.3 1.8-.8 2.5h2.6c.2-.6.4-1.3.5-1.9h.4c1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.2 2.6-2.6 2.6h-3.1v2.3H19c2.7 0 4.9-2.2 4.9-4.9S21.7 8.3 19 8.3z' }),
    react.createElement('path', { fill: '#969696', d: 'M31.1 11.5c-3.9 0-7.1-3.2-7.1-7.1 0-1.6.5-3.1 1.5-4.3-3.5.4-6.2 3.4-6.2 7 3.2.2 5.7 2.8 5.7 6 0 .3 0 .6-.1.9.5.1.9.1 1.4.1 2.3 0 4.3-1.1 5.6-2.8-.2.2-.5.2-.8.2z' }),
    react.createElement(
      'g',
      { fill: '#A8A8A8' },
      react.createElement('path', { d: 'M13.3 20.1l-3.5-3.4.7-.7 3.5 3.4-.7.7z' }),
      react.createElement('path', { d: 'M11.8 20.5l-1-.2 1.3-4.8.9.3-1.2 4.7z' }),
      react.createElement('path', { d: 'M9.7 19.1l-.3-.9 4.8-1.3.2 1-4.7 1.2z' })
    ),
    react.createElement(
      'g',
      { fill: '#A8A8A8' },
      react.createElement('path', { d: 'M8.1 24.2l-3.5-3.4.7-.7 3.4 3.4-.6.7z' }),
      react.createElement('path', { d: 'M6.5 24.6l-.9-.2 1.2-4.8 1 .3-1.3 4.7z' }),
      react.createElement('path', { d: 'M4.4 23.2l-.2-.9L8.9 21l.3 1-4.8 1.2z' })
    )
  )
}
