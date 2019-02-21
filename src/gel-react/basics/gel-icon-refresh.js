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
    { className: 'gel-icon gel-icon-refresh', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M32 0H20v12h4V7.1c2.4 2.2 4 5.4 4 8.9 0 6.6-5.4 12-12 12v4c8.8 0 16-7.2 16-16 0-4.8-2.1-9.1-5.4-12H32V0zM8 24.9c-2.4-2.2-4-5.4-4-8.9C4 9.4 9.4 4 16 4V0C7.2 0 0 7.2 0 16c0 4.8 2.1 9.1 5.4 12H0v4h12V20H8v4.9z' })
  )
}
