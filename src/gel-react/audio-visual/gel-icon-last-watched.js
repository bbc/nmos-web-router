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
    { className: 'gel-icon gel-icon-last-watched', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M10.5 18.5c0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5S19 13 16 13s-5.5 2.5-5.5 5.5' }),
    react.createElement('path', { d: 'M0 8v21h7l-1 3h15l-2-6H3V11h26v15h-8l1 3h10V8zM4 4h24v2H4zM8 0h16v2H8z' })
  )
}
