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
    { className: 'gel-icon gel-icon-table-tennis', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M27.3 21c.1-.1.2-.2.4-.3C32.9 15.4 33.5 7.6 29 3 24.5-1.5 16.6-.9 11.4 4.3 8.5 7.1 7.1 10.6 7 14v7l-7 7 4 4 7-7h7.1c-.1.3-.1.6-.1 1 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.1-1.1-3.9-2.7-5zm-16.9 2.5L4 29.9 2.1 28l6.3-6.3V16l3.4 3.4-2.2 2.2.7.7 2.2-2.2 3.4 3.4h-5.5zm13.6 7c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z' })
  )
}
