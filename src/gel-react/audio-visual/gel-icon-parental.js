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
    { className: 'gel-icon gel-icon-parental', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('circle', { cx: '16', cy: '16', r: '16' }),
    react.createElement('path', { fill: '#FFF', d: 'M23.4 24h-2.7l-.2-1.7c-1.1 1.5-3 2.1-4.5 2.1-4.8 0-8-3.7-8-8.3s3.1-8.3 8-8.3c3.3 0 6.8 1.8 7.2 5.8H19c-.1-1.4-1.5-2.2-3.2-2.2-2.7 0-3.7 2.4-3.7 4.7 0 2.4 1 4.7 3.7 4.7 2.1 0 3.4-1 3.7-2.4h-2.9v-3.1h6.7V24z' })
  )
}
