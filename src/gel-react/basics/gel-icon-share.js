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
    { className: 'gel-icon gel-icon-share', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M6.8 22.2c1.6 0 3-.7 4-1.8l9 4.8c-.1.4-.2.8-.2 1.3 0 3 2.5 5.5 5.5 5.5s5.5-2.4 5.5-5.5-2.5-5.5-5.5-5.5c-1.6 0-3 .7-4 1.8l-9.5-5.2-.1-2.8 9.7-5.5c1 1 2.3 1.5 3.8 1.5 3 0 5.5-2.5 5.5-5.5S28.2 0 25.2 0s-5.5 2.4-5.5 5.5c0 .6.1 1.1.2 1.6l-9.3 5.7c-1-.9-2.3-1.5-3.8-1.5-3 0-5.5 2.4-5.5 5.5.1 2.9 2.5 5.4 5.5 5.4z' })
  )
}
