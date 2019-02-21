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
    { className: 'gel-icon gel-icon-quiz', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M4 24c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM17 7.3c-3.3 0-4.5 2.7-4.5 5.5 0 2.7 1.2 5.4 4.5 5.4.5 0 1.3.1 1.5-.1l-1.9-1.7 1.7-1.8 2.2 2c.6-.8 1-2 1-3.7 0-2.9-1.2-5.6-4.5-5.6z' }),
    react.createElement('path', { d: 'M16.9 0C8.7 0 2 5.9 2 13.1 2 20.2 8.8 26 17.1 26S32 20.1 32 12.9C32 5.8 25.2 0 16.9 0zm7.9 20.4l-1.7 1.7-2.1-1.8c-1.1.6-2.4.9-4 .9-5.1 0-8.1-3.7-8.1-8.4 0-4.8 3-8.5 8.1-8.5s8.1 3.7 8.1 8.5c0 2.3-.8 4.4-2.1 5.9l1.8 1.7z' })
  )
}
