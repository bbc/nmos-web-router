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
    { className: 'gel-icon gel-icon-stumble-upon', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 13c-.8 0-1.5.7-1.6 1.5v3.1c-.1 2.2-1.9 3.9-4.1 3.9-2.2 0-4-1.7-4.1-3.9V16h2.5v1.6c0 .8.7 1.5 1.5 1.5s1.5-.6 1.5-1.5v-3.1c.1-2.2 1.9-3.9 4.1-3.9 2.2 0 4 1.7 4 3.9l-1.5.4-1-.4c.2-.9-.5-1.5-1.3-1.5zm9.7 4.6c-.1 2.2-1.9 3.9-4.1 3.9-2.2 0-4-1.7-4.1-3.9V16l1 .4L20 16v1.6c0 .8.7 1.5 1.5 1.5s1.5-.6 1.5-1.5V16h2.5v1.6z' })
  )
}
