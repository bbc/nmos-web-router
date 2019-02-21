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
    { className: 'gel-icon gel-icon-wind-gust-info-b', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M18.5 5c-3.2 0-6.1 1.1-8.4 3l-5-5H11V0H0v11h3V5.1l5 5c-1.8 2.3-3 5.2-3 8.4C5 25.9 11.1 32 18.5 32S32 25.9 32 18.5 25.9 5 18.5 5m0 24C12.7 29 8 24.3 8 18.5S12.7 8 18.5 8 29 12.7 29 18.5 24.3 29 18.5 29' })
  )
}
