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
    { className: 'gel-icon gel-icon-zoom-in', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M15 20h-4v-5H6v-4h5V6h4v5h5v4h-5v5z' }),
    react.createElement('path', { d: 'M32 28.5l-8.2-8.2c3.4-5.1 2.9-12-1.6-16.4C19.7 1.3 16.3 0 13 0 9.7 0 6.3 1.3 3.8 3.8c-5.1 5.1-5.1 13.3 0 18.4C6.3 24.7 9.7 26 13 26c2.5 0 5.1-.7 7.3-2.2l8.2 8.2 3.5-3.5zM6.6 19.4C4.9 17.7 4 15.4 4 13c0-2.4.9-4.7 2.6-6.4C8.3 4.9 10.6 4 13 4s4.7.9 6.4 2.6c3.5 3.5 3.5 9.2 0 12.7-1.7 1.7-4 2.6-6.4 2.6-2.4.1-4.7-.8-6.4-2.5z' })
  )
}
