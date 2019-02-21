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
    { className: 'gel-icon gel-icon-drivers', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M31.9 18c.1-.7.1-1.3.1-2 0-8.8-7.2-16-16-16S0 7.2 0 16c0 .7.1 1.3.1 2H9l5 5v4.8C9.7 27.1 6.1 24 4.7 20H.5c1.8 6.9 8 12 15.5 12s13.7-5.1 15.5-12h-4.2c-1.4 4-5 7.1-9.3 7.8V23l5-5h8.9zM8 15H3C3.6 8.3 9.2 3 16 3s12.4 5.3 13 12v1-1h-5l-4-4h-8l-4 4zm8 4c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z' }),
    react.createElement('circle', { cx: '16', cy: '16', r: '2' })
  )
}
