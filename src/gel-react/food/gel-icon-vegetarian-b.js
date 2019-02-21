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
    { className: 'gel-icon gel-icon-vegetarian-b', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 2c7.72 0 14 6.28 14 14s-6.28 14-14 14S2 23.72 2 16 8.28 2 16 2m0-2C7.164 0 0 7.163 0 16s7.164 16 16 16 16-7.163 16-16S24.836 0 16 0z' }),
    react.createElement('path', { d: 'M18.328 25h-4.79L7.453 9h4.343l4.183 11.985h.044L20.205 9h4.342l-6.219 16z' })
  )
}
