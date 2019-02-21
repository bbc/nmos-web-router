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
    { className: 'gel-icon gel-icon-congestion-traffic', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M30 8l-3-8H11L8 8H6v2h16.4l.5 1.3L25 17h3v3h4V8h-2zM10.4 7l1.9-5h13.5l1.9 5H10.4zM30 13h-5v-1.5l5-1.5v3z' }),
    react.createElement('path', { d: 'M26 20h-2l-3-8H5l-3 8H0v12h4v-3h18v3h4V20zM7 25H2v-3l5 1.5V25zm-2.6-6l1.9-5h13.5l1.9 5H4.4zM24 25h-5v-1.5l5-1.5v3z' })
  )
}
