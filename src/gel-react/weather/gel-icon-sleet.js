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
    { className: 'gel-icon gel-icon-sleet', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M23 8.2h-.6c-.8-2.9-3.4-5-6.4-5-3.1 0-5.7 2.1-6.4 5H9c-2.7 0-4.9 2.2-4.9 4.9S6.3 18 9 18h3v-2.3H9c-1.4 0-2.6-1.2-2.6-2.6 0-1.4 1.2-2.6 2.6-2.6.9 0 1.8.5 2.2 1.3l2-1.2c-.4-.6-.9-1.2-1.5-1.6.4-2 2.2-3.5 4.3-3.5 2.4 0 4.4 2 4.4 4.4 0 .9-.3 1.8-.8 2.5h2.6c.2-.6.4-1.3.5-1.9h.4c1.4 0 2.6 1.2 2.6 2.6 0 1.4-1.2 2.6-2.6 2.6H20V18h3c2.7 0 4.9-2.2 4.9-4.9S25.7 8.2 23 8.2z' }),
    react.createElement('path', { fill: '#68A5D8', d: 'M11.6 24.1l.4-4.7-4 2.3c-.7.4-1.2 1.2-1.2 2.1 0 1.3 1.1 2.4 2.4 2.4 1.3.1 2.3-.9 2.4-2.1z' }),
    react.createElement(
      'g',
      { fill: '#A8A8A8' },
      react.createElement('path', { d: 'M17.4 20.1l-3.5-3.5.7-.7 3.5 3.5-.7.7z' }),
      react.createElement('path', { d: 'M15.8 20.5l-.9-.3 1.3-4.7.9.3-1.3 4.7z' }),
      react.createElement('path', { d: 'M13.8 19.1l-.3-.9 4.7-1.3.3.9-4.7 1.3z' })
    )
  )
}
