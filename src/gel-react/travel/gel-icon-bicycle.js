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
    { className: 'gel-icon gel-icon-bicycle', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M23.3 7.5H27v-2h-5.3l1.2 4H12.2L11.8 8l2.2-.5v-1H9v2l1.8-.4.5 1.6-3.1 5.2c-.7-.3-1.4-.4-2.2-.4-3.3 0-6 2.7-6 6s2.7 6 6 6c2.6 0 4.8-1.7 5.7-4H9.4c-.7 1.2-2 2-3.4 2-2.2 0-4-1.8-4-4s1.8-4 4-4c.4 0 .8.1 1.1.2L5 20.2v1.3h10.1l8.5-9.4.8 2.6c-2.5.7-4.4 3-4.4 5.8 0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.2-2.5-5.7-5.6-6l.6 2.1c1.7.5 3 2 3 3.8 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.1.4-2.1 1.2-2.8.5-.5 1.1-.8 1.8-1l1.4 4.8h1L23.3 7.5zm-10 4h8.1l-6.1 6.7-2-6.7zm-7.3 9l2-3.4c1.2.7 2 2 2 3.4H6zm6 0c0-2.2-1.2-4.1-2.9-5.1l2.2-3.7 2.4 7.9.3 1h-2z' })
  )
}
