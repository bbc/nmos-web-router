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
    { className: 'gel-icon gel-icon-ips-cross', xmlns: 'http://www.w3.org/2000/svg', width: '101', height: '101', viewBox: '0 0 101 101' },
    react.createElement('line', { fill: 'none', strokeWidth: '9', strokeLinecap: 'round', strokeMiterlimit: '10', x1: '4.5', y1: '96.5', x2: '96.5', y2: '4.5' }),
    react.createElement('line', { fill: 'none', strokeWidth: '9', strokeLinecap: 'round', strokeMiterlimit: '10', x1: '4.5', y1: '4.5', x2: '96.5', y2: '96.5' })
  )
}
