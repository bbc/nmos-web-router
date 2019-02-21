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
    { className: 'gel-icon gel-icon-wind-gust-info-a', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 16zM32 10H22v3h4.7l-8.3 9.4C16.7 24 14.5 25 12 25c-5 0-9-4-9-9s4-9 9-9c1.6 0 3.2.4 4.5 1.2L18 5.6c-1.8-1-3.8-1.6-6-1.6C5.4 4 0 9.4 0 16s5.4 12 12 12c3.3 0 6.2-1.3 8.4-3.4l.1-.1 8.5-9.6V20h3V10z' })
  )
}
