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
    { className: 'gel-icon gel-icon-dance-moves', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M14.8 6.9c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4-1.3 0-2.4 1.1-2.4 2.4-.1 1.3 1 2.4 2.4 2.4z' }),
    react.createElement('path', { d: 'M18.9 11.3L21 7.5l2.9-6L22.5 0l-5.2 8.3s-2.3-.1-4.7.4c0 0-2.7.7-3.8 1.7 0 0-.1 0-.3.3-.1.1-.1.2-.2.4-.3.8-.5 2.4-.2 5.8h2s-1-4.7 1.9-5.3c0 0 .9 7 .8 7.6L8.5 29.6l-.5 1 2 1.4 6.2-10.8 3.3 2.6.4 8.1H22l.4-9.8-4.7-4.1 1.2-6.7z' })
  )
}
