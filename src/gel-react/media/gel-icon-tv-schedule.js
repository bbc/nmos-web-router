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
    { className: 'gel-icon gel-icon-tv-schedule', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 0h6v6H0zM0 10h6v6H0zM0 20h6v6H0zM8 0h24v6H8zM28.7 16H32v-6H8v6h9.3c-1.3 1-2.3 2.4-2.8 4H8v6h6.5c1.2 3.5 4.6 6 8.5 6 5 0 9-4 9-9 0-2.8-1.3-5.3-3.3-7M23 30c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7' }),
    react.createElement('path', { d: 'M27.6 25.2L24 22.5V18h-2v5.5l4.4 3.3z' })
  )
}
