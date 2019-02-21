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
    { className: 'gel-icon gel-icon-puzzles', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M27.1 12.9c1 .3 2 .1 3-.4 1.9-1.1 2.5-3.5 1.4-5.4-1.1-1.9-3.5-2.5-5.4-1.4-.9.5-1.6 1.4-1.8 2.3l-.1-.2-3.6-6.3-7.1 4.1c.9.3 1.6.9 2.1 1.7 1.1 1.9.4 4.3-1.4 5.4-1.9 1.1-4.3.4-5.4-1.4-.5-.9-.6-1.8-.4-2.7l-6.9 3.9 3.9 6.8c-1.1-.4-2.4-.3-3.4.3C.1 20.7-.5 23.1.5 25c1.1 1.9 3.5 2.5 5.4 1.4 1.1-.6 1.7-1.6 1.9-2.8l3.9 6.8 6.8-3.9c-.8-.3-1.4-.9-1.9-1.6-1.1-1.9-.4-4.3 1.4-5.4 1.9-1.1 4.3-.4 5.4 1.4.4.8.6 1.6.5 2.5l7-4-3.6-6.3-.2-.2z' })
  )
}
