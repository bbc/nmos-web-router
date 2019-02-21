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
    { className: 'gel-icon gel-icon-live-restart', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 4h-1l2-2-2-2-6 6 6 6 2-2-2-2h1c5.5 0 10 4.5 10 10s-4.5 10-10 10S6 23.5 6 18H2c0 7.7 6.3 14 14 14s14-6.3 14-14S23.7 4 16 4' }),
    react.createElement('path', { d: 'M10 10L6 6l4-4-2-2-6 6 6 6z' })
  )
}
