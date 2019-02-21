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
    { className: 'gel-icon gel-icon-ferry', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M6 10h20l-2-4h4l-2-3h-7V0h-6v3H6L4 6h4zM13 21l-3-1v2h3zM19.3 15h-6.6l-.9 3h8.4z' }),
    react.createElement('path', { d: 'M7 27.8l3 1 3-1 3 1 3-1 3 1 3-1 2.4.8L32 12H0l4.6 16.6 2.4-.8zM9 24v-5h1.5l.6-1.8 1-3.2h8l.9 3.2.5 1.6.1.2H23v7h-2v-2H11v2H9v-2z' }),
    react.createElement('path', { d: 'M19 22h3v-2l-3 1zM31 29.9l-3 1-3-1-3 1-3-1-3 1-3-1-3 1-3-1-3 1-3-1-1 .4v1l1-.3 3 1 3-1 3 1 3-1 3 1 3-1 3 1 3-1 3 1 3-1 1 .3v-1z' })
  )
}
