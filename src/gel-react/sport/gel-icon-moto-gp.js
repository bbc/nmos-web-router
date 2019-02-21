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
    { className: 'gel-icon gel-icon-moto-gp', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M5.5 18c-1.5 0-2.7-.9-3.2-2.2v-.1c-.2-.3-.3-.8-.3-1.2 0-1.1.5-2 1.3-2.7.6-.5 1.4-.8 2.2-.8 1.5 0 2.8.9 3.3 2.3l2.2.6C10.6 11.1 8.3 9 5.5 9 2.5 9 0 11.5 0 14.5S2.5 20 5.5 20c2.1 0 3.8-1.1 4.8-2.8l-2.2-.4c-.6.7-1.6 1.2-2.6 1.2z' }),
    react.createElement('path', { d: 'M3.5 15l8 1.4 1-1.1L4 13zM27.8 9.2L30 7l-1-3-3-3-3-1-3 3 7 3-10 4-3 2 2 2-5 5h9l1.5-2.2c.9 1.9 2.8 3.2 5 3.2.6 0 1.1-.1 1.7-.3C30.4 19 32 17 32 14.5c0-2.6-1.8-4.8-4.2-5.3zM26.5 18c-1.9 0-3.4-1.6-3.4-3.5v-.1L24 13l1.3-1.3.7 3.3h1l1-3 .4-.4c.9.6 1.6 1.7 1.6 2.9 0 1.9-1.6 3.5-3.5 3.5z' }),
    react.createElement('path', { d: 'M13 11l3.2-2.2 5.3-2.2L20 5h-6l-2 2-3-1-2-2H2L1 5l9 3z' })
  )
}
