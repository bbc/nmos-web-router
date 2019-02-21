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
    { className: 'gel-icon gel-icon-lock', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '31.9', viewBox: '0 0 32 31.9' },
    react.createElement('path', { d: 'M25 13.9V8.3C25 3.7 20.9 0 16 0S7 3.7 7 8.3v5.6H3v18h26v-18h-4zM12 8.3c0-2 1.8-3.7 4-3.7s4 1.6 4 3.7v5.6h-8V8.3z' })
  )
}
