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
    { className: 'gel-icon gel-icon-school-age', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 6v5c0 1.6 1.3 3 3 3h26c1.7 0 3-1.3 3-3V6H0zM11.5 3.5c0-.3.2-.5.5-.5h9c.3 0 .5.2.5.5V4h3v-.5C24.5 1.6 22.9 0 21 0h-9c-1.9 0-3.5 1.6-3.5 3.5V4h3v-.5zM25 19h2v6h-2v3l-1.5 1-1.5-1v-3h-2v-6h2v-3H10v3h2v6h-2v3l-1.5 1L7 28v-3H5v-6h2v-3H1v16h30V16h-6z' }),
    react.createElement('path', { d: 'M7 21h3v2H7zM22 21h3v2h-3z' })
  )
}
