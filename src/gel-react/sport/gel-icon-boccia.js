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
    { className: 'gel-icon gel-icon-boccia', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M15.9 9.4c.4 1 1.2 1.7 2.2 2.1l4.8-5v-.1c-.8-1.9-3.1-2.8-5-2-1.9.8-2.8 3.1-2 5zm2.9 10.1l4.7 4.9 6 .5 1.9-1.8-5.7-1.2-5.9-6.9M8.9 27.9l-1-5.2-.1-8.2-4 3.2 1.7 8.5-1.5 1L2.4 22 0 15.8l4.5-3.4 4.9-2.8 7.3 2.5 1.7 2-2.5 11.2 1.9 2.6m11.7-12.1c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm0 4c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z' })
  )
}
