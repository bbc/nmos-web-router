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
    { className: 'gel-icon gel-icon-weightlifting', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M31 4V1l-1-1h-2l-1 1v7l1 1h2l1-1V5h1V4zM2 0L1 1v3H0v1h1v3l1 1h2l1-1V1L4 0zM14.8 11.8c.3.2.7.2 1 .2.8 0 1.6-.5 2-1.2.6-1.1.1-2.5-1-3-.3-.2-.7-.2-1-.2h-.2L13.9 11c.2.3.5.6.9.8z' }),
    react.createElement('path', { d: 'M6 5h1l2 5 3 5 1 4-4 6v7h2l1-6 3.4-3 1.8 3.5L21 32h2l-2.3-6.1L19 19v-2l1-2 3-5 2-5h1V4H6v1zm2.6 0h14.8L21 9l-2 3-2 1h-2l-2-1-2-3-2.4-4z' })
  )
}
