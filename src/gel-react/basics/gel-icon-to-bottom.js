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
    { className: 'gel-icon gel-icon-to-bottom', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '31.9', viewBox: '0 0 32 31.9' },
    react.createElement('path', { d: 'M0 26.9h32v3H0zM16 26.9L0 1.9h8.2L16 15.1l7.8-13.2H32z' })
  )
}
