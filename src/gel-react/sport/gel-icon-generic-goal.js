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
    { className: 'gel-icon gel-icon-generic-goal', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { fill: '#FFF', d: 'M16 27.3c-5.7 0-10.3-4.6-10.3-10.3S10.3 6.7 16 6.7 26.3 11.3 26.3 17 21.7 27.3 16 27.3z' }),
    react.createElement('path', { d: 'M16 7.4c5.3 0 9.6 4.3 9.6 9.6s-4.3 9.6-9.6 9.6-9.6-4.3-9.6-9.6 4.3-9.6 9.6-9.6M16 6C9.9 6 5 10.9 5 17s4.9 11 11 11 11-4.9 11-11S22.1 6 16 6z' }),
    react.createElement('path', { d: 'M0 0v16h2v-4h3c.5-.9 1.3-2.6 2-3.3V7h2c.8-.5 2-1.3 3-1.6V2h3v3h2V2h3V5.3c.9.3 2.2 1.1 3 1.6h2v1.7c.7.8 1.5 2.3 2 3.3h3v4h2V0H0zm5 10H2V7h3v3zm0-5H2V2h3v3zm5 0H7V2h3v3zm15 0h-3V2h3v3zm5 5h-3V7h3v3zm0-5h-3V2h3v3zM16 24.6c-4.2 0-7.6-3.4-7.6-7.6h.7c0 3.8 3.1 6.9 6.9 6.9v.7z' })
  )
}
