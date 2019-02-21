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
    { className: 'gel-icon gel-icon-embed-off-grid', xmlns: 'http://www.w3.org/2000/svg', width: '36', height: '32', viewBox: '0 0 36 32' },
    react.createElement('path', { d: 'M11 29v-7l-5-6 5-6V3L0 16zM25 3v7l5 6-5 6v7l11-13zM13 25h2l8-18h-2z' })
  )
}
