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
    { className: 'gel-icon gel-icon-mobile', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M22 0v2H6v30h20V0h-4zm-9 28h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm5 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4v-2h4v2zm4 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm0-5H10V6h12v9z' })
  )
}
