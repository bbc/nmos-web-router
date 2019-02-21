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
    { className: 'gel-icon gel-icon-reading-and-writing', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M8 0h18v9H8zM30 0h-2v9h2c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM4 2L0 4.5 4 7zM4 17h9v2H4z' }),
    react.createElement('path', { d: 'M16 14l-2-2H0v20h14l2-2 2 2h14V12H18l-2 2zm-1 16H2V14h13v16zm15 0H17V14h13v16z' }),
    react.createElement('path', { d: 'M4 21h9v2H4zM4 25h9v2H4zM19 17h9v2h-9zM19 21h9v2h-9zM19 25h9v2h-9z' })
  )
}
