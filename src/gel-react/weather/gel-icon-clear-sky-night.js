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
    { className: 'gel-icon gel-icon-clear-sky-night', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { fill: '#969696', d: 'M14.4 10.4c0-1.6.5-3.1 1.5-4.3-3.5.4-6.2 3.4-6.2 7.1 0 3.9 3.2 7.1 7.1 7.1 2.3 0 4.4-1.1 5.7-2.8-.3 0-.6.1-.9.1-4.1-.1-7.2-3.3-7.2-7.2z' })
  )
}
