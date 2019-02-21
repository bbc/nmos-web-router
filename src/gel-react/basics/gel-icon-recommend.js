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
    { className: 'gel-icon gel-icon-recommend', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 28C9.4 28 4 22.6 4 16S9.4 4 16 4c3.1 0 6 1.2 8.1 3.2l-8.7 10.4-5.4-3.8-3 3.5 8.8 6.8 11-13.1 2.8-3.3C26.8 3.1 21.8 0 16 0 7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16h-4c0 6.6-5.4 12-12 12' })
  )
}
