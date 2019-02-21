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
    { className: 'gel-icon gel-icon-taekwondo', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M3.7 12l-1.2 3-1 2 1 1 2-2 1.3-1.7-.2-.2zM3.7 4.6l.4-.1L6.5 4V.5C6.1.2 5.6 0 5 0 3.8 0 2.8.9 2.6 2c0 .2-.1.3-.1.5 0 .9.5 1.7 1.2 2.1z' }),
    react.createElement('path', { d: 'M13.5 10l-2-2 5-1 4.1-2H8.5l-4 1-1 2v1.6l3.2 3.5 3.8 1.9-2 5-1 12h2l2-10 4-6 7-7 8-5V2z' })
  )
}
