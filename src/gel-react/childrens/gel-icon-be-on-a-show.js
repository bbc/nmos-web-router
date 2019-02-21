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
    { className: 'gel-icon gel-icon-be-on-a-show', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16.3 14.5c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3S12 7.8 12 10.2s1.9 4.3 4.3 4.3zM20.6 16.1H12l-1.6 4.8h11.8z' }),
    react.createElement('path', { d: 'M32 26V1H0v25h12v2.5H6V31h20v-2.5h-6V26h12zm-20-3.8H4V4.8h24v17.5H12z' })
  )
}
