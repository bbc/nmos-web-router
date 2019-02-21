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
    { className: 'gel-icon gel-icon-volleyball', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M6.5 13L6 7H4.5v10l5.4-2.4-2.2-2.2zM12.6 8.9c.7-.2 1.2-.6 1.6-1.2L11.5 4c-1.3.3-2.2 1.7-1.8 3s1.6 2.3 2.9 1.9zM20.5 6c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.4 3 3 3zm0-5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z' }),
    react.createElement('path', { d: 'M13.5 26l-10 4.7V32l13-3.4 2-10.6-1-6h5l6-3-1-1.5-5 2.1-6-.6-6 2-1.4.7 2.3 2.2 3.1 3.1-1 3z' }),
    react.createElement('path', { d: 'M6.5 24.5V26l6-1.5v-3z' })
  )
}
