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
    { className: 'gel-icon gel-icon-set-top-box', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 4c4.7 0 9 1.7 12.3 4.5L29.6 7C25.9 3.9 21.2 2 16 2S6.1 3.9 2.4 7l1.3 1.5C7 5.7 11.3 4 16 4' }),
    react.createElement('path', { d: 'M6.3 11.5L7.7 13c2.3-1.9 5.2-3 8.3-3 3.2 0 6.1 1.1 8.3 3l1.3-1.5C23 9.3 19.7 8 16 8s-7 1.3-9.7 3.5M7 21c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2' }),
    react.createElement('path', { d: 'M0 18v12h4l2-2h19l2 2h5V18H0zm7 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3m13-2h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z' })
  )
}
