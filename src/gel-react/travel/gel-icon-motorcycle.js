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
    { className: 'gel-icon gel-icon-motorcycle', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M5.5 19C7.4 19 9 20.6 9 22.5S7.4 26 5.5 26 2 24.4 2 22.5 3.6 19 5.5 19m0-2c-3 0-5.5 2.5-5.5 5.5S2.5 28 5.5 28s5.5-2.5 5.5-5.5S8.5 17 5.5 17M26.5 19c1.9 0 3.5 1.6 3.5 3.5S28.4 26 26.5 26 23 24.4 23 22.5s1.6-3.5 3.5-3.5m0-2c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5' }),
    react.createElement('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M5 22v2h10l8.4-8.4 2.7 7.8 1.6-.5L25 14l3-2v-2h-2l-1-3h-6v2h4v2l-7 1-3 3-2-2H3v2l10 3z' })
  )
}
