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
    { className: 'gel-icon gel-icon-help', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm2 26h-4v-4h4v4zm2.6-10c-1.2.9-2.6 1.6-2.6 3.2v.8h-4v-1c0-2.4 1.4-3.4 2.5-4.3 1.1-.8 2.5-1.5 2.5-2.9 0-1.7-1.4-2.4-2.8-2.4-2 0-3.7 1.6-3.7 3.6H9c.1-4 3.1-6.8 7-6.8 5.1 0 7.3 3.1 7.3 5.2 0 2.7-1.5 3.7-2.7 4.6z' })
  )
}
