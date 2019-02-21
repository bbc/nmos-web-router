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
    { className: 'gel-icon gel-icon-rain', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M3 8.5c0 3 2.5 5.5 5.5 5.5 2.4 0 4.5-1.6 5.2-3.8L16 1 7 3.2C4.7 3.9 3 6 3 8.5zM22 8.2c-2.3.7-4 2.8-4 5.3 0 3 2.5 5.5 5.5 5.5 2.4 0 4.5-1.6 5.2-3.8L31 6l-9 2.2zM1 25.5c0 3 2.5 5.5 5.5 5.5 2.4 0 4.5-1.6 5.2-3.8L14 18l-9 2.2c-2.3.7-4 2.8-4 5.3z' })
  )
}
