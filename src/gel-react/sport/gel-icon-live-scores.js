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
    { className: 'gel-icon gel-icon-live-scores', xmlns: 'http://www.w3.org/2000/svg', width: '56', height: '32', viewBox: '0 0 56 32' },
    react.createElement('path', { d: 'M0 0h56v32H0z' }),
    react.createElement(
      'g',
      { fill: '#FFF' },
      react.createElement('path', { d: 'M4 7.9h4.2v12.4h7.5v3.6H4v-16zM17 7.9h4.2v16H17v-16zM32.8 23.9H28l-5-16h4.3l3.1 11.9 3.1-11.9H38l-5.2 16zM39 7.9h12.7v3.3h-8.6V14H51v3.2h-7.8v3H52v3.6H39V7.9z' })
    )
  )
}
