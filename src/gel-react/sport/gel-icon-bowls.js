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
    { className: 'gel-icon gel-icon-bowls', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M5.4 15.8c1.7-4.1 5.5-7.1 10.1-7.5C15.2 4.4 12 1.2 8 1.2 3.9 1.2.5 4.6.5 8.7c0 3.3 2 6 4.9 7.1zM31.5 9.7c0-3-2.5-5.5-5.5-5.5-2.8 0-5.1 2.1-5.4 4.7l1.5.6c.1-2.1 1.8-3.9 4-3.9s4 1.8 4 4c0 2-1.5 3.7-3.5 3.9.3.4.5.9.8 1.4 2.3-.4 4.1-2.6 4.1-5.2z' }),
    react.createElement('circle', { cx: '14', cy: '20.8', r: '2.5' }),
    react.createElement('path', { d: 'M16.5 9.8C10.7 9.8 6 14.5 6 20.2s4.7 10.5 10.5 10.5C22.3 30.8 27 26 27 20.2S22.3 9.8 16.5 9.8zM14 24.2c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5c0 2-1.6 3.5-3.5 3.5z' })
  )
}
