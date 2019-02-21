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
    { className: 'gel-icon gel-icon-interviews', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M7.1 18.5l2.6 4.4 14.2-6-3.4-6.6zM0 23.3l1.5 2.9 7.2-3-2.3-3.9zM31.1 8.4c-1.6-2.5-4.9-3.3-7.4-1.9-.1 0-.1.1-.2.1-.9.5-1.7 1.3-2.2 2.2-.1.1-.1.4 0 .5 1.2 2.5 2.5 4.9 3.7 7.4.1.2.2.3.4.3 1.7.3 3.3-.3 4.5-1.4 2.2-1.7 2.8-4.8 1.2-7.2z' })
  )
}
