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
    { className: 'gel-icon gel-icon-new', xmlns: 'http://www.w3.org/2000/svg', width: '56', height: '32', viewBox: '0 0 56 32' },
    react.createElement('path', { d: 'M0 0h56v32H0z' }),
    react.createElement('path', { fill: '#FFF', d: 'M4 7.9h4.3l5.6 9.8V7.9h3.9v16h-4.3L8 13.9v10H4v-16zM20.2 7.9h11.4v3.3h-7.2V14h6.5v3.2h-6.5v3h7.4v3.6H20.2V7.9zM48.5 23.9h-3.8l-2-11-2 11h-3.9l-3.9-16h3.8l2.1 11.7 2.1-11.7h3.6l2.1 11.7 2.1-11.7h3.8l-4 16z' })
  )
}
