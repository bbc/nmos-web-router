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
    { className: 'gel-icon gel-icon-mybbc-mysport', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('circle', { cx: '11.3', cy: '13.2', r: '7.8' }),
    react.createElement('path', { d: 'M22.3 30.7l-3.2-6.3H3.5L.3 30.7M20.2 6.6H32v3H21.9zM14.8 1.3H32v2.9H17.2z' }),
    react.createElement(
      'g',
      null,
      react.createElement('path', { d: 'M22.9 12H32v2.9h-8.5z' })
    )
  )
}
