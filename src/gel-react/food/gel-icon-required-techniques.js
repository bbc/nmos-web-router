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
    { className: 'gel-icon gel-icon-required-techniques', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { fill: 'none', d: 'M16.356 6.392L4.978 18.008h22.755z' }),
    react.createElement('path', { fill: '#0D0D0D', d: 'M17.777 4.969l2.116-2.116 7.111 7.111 1.423-1.422-7.111-7.111L19.893.008 18.47 1.431l-2.114 2.116L12.8 7.103l-8.534 8.533-.712.711L0 19.903h7.111l12.088 12.089h2L32 21.191v-2L17.777 4.969zM4.978 18.008L16.356 6.392l11.377 11.616H4.978z' })
  )
}
