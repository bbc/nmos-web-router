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
    { className: 'gel-icon gel-icon-apps', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 14h14V0H0v14zM3 2l8 5-8 5V2zM18 14h14V0H18v14zm2-2v-2l2 2h-2zm4-1l-3-3 6-6 3 3-6 6zM0 32h14V18H0v14zm2-11h1v-1h2v1h7v8H2v-8zM18 32h14V18H18v14zm3-11l2.6.5L25 19l1.4 2.5L29 21l-.5 2.6L31 25l-2.5 1.4.5 2.6-2.6-.5L25 31l-1.4-2.5-2.6.5.5-2.6L19 25l2.5-1.4L21 21z' }),
    react.createElement('path', { d: 'M8 22c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3m0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2' })
  )
}
