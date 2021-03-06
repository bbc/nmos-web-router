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
    { className: 'gel-icon gel-icon-events', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M26.3 10.1h2v4h-2zM3.3 10.1h-2v17h12v-2h-10zM25.3 8.1h3v-6h-5v4h-4v-4h-9v4h-4v-4h-5v6h2z' }),
    react.createElement('path', { d: 'M22.3 2.1v-2h-2v5h2zM9.3 2.1v-2h-2v5h2z' }),
    react.createElement('path', { fill: '#000100', d: 'M19.3 12.1l4.4 5.6 7-1.2-3.9 6 3.3 6.3-6.9-2-5 5.1-.3-7.1-6.3-3.2 6.6-2.4z' })
  )
}
