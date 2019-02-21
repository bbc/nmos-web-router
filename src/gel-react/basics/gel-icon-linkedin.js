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
    { className: 'gel-icon gel-icon-linkedin', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M7.3 31.5V10.6H.4v20.9h6.9zM3.8 7.7c2.4 0 3.9-1.6 3.9-3.6S6.2.5 3.9.5C1.5.5 0 2.1 0 4.1s1.5 3.6 3.8 3.6zM11.1 31.5H18V19.8c0-.6 0-1.3.2-1.7.5-1.2 1.6-2.5 3.5-2.5 2.5 0 3.5 1.9 3.5 4.7v11.2H32v-12c0-6.4-3.4-9.4-7.9-9.4-3.7 0-5.3 2.1-6.2 3.5v-3H11c.2 1.9.1 20.9.1 20.9z' })
  )
}
