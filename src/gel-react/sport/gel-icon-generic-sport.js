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
    { className: 'gel-icon gel-icon-generic-sport', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M29.5 0h-1L26 5h-7l-2.5-5h-1L13 5H6L3.5 0h-1L0 5v14h4v-3h3v3h2v-3h6v3h2v-3h6v3h2v-3h3v3h4V5l-2.5-5zM16 1.2L17.9 5h-3.8L16 1.2zm-13 0L4.9 5H1.1L3 1.2zM11 9H2V7h10l-1 2zm1.1 0l1-2h5.8l1 2h-7.8zM30 9h-9l-1-2h10v2zm-2.9-4L29 1.2 30.9 5h-3.8z' })
  )
}
