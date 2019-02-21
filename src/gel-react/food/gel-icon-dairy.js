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
    { className: 'gel-icon gel-icon-dairy', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M27.5 22c0-4.418-2.292-8-5.5-8s-5.5 3.582-5.5 8h11zM28.5 26.008V24h-13v2.008l3 2.992v1h-1l-1 1v1h11v-1l-1-1h-1v-1zM15.5 30v-1l-2-2v-5h1c0-1.9.364-3.519 1-5v-6l-2-6V4h-8v1l-2 6v19l2 2h8l1-1 1-1z' }),
    react.createElement('path', { d: 'M28.5 26.008V24h-13v2.008l3 2.992v1h-1l-1 1v1h11v-1l-1-1h-1v-1zM14.5 2h-10V1l1-1h8l1 1z' })
  )
}
