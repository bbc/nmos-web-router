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
    { className: 'gel-icon gel-icon-red-flag', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 3h1v27H0z' }),
    react.createElement('path', { fill: '#C00', d: 'M1 3h16v22H1z' }),
    react.createElement('path', { fill: '#C00', d: 'M15 0h17v21H15z' }),
    react.createElement('path', { fill: '#FFF', d: 'M18 24l-1 1V3h1z' }),
    react.createElement('path', { fill: '#1C1C1C', d: 'M18 3l-3-3v3z' })
  )
}
