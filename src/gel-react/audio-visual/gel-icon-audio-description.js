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
    { className: 'gel-icon gel-icon-audio-description', xmlns: 'http://www.w3.org/2000/svg', width: '48', height: '32', viewBox: '0 0 48 32' },
    react.createElement('path', { d: 'M0 0h48v32H0z' }),
    react.createElement('path', { fill: '#FFF', d: 'M26 8h6.9c4.9 0 7.8 3 7.8 7.9 0 5.2-3 8.1-7.8 8.1H26V8zm4.2 12.4h2c3.2-.1 4.4-1.3 4.4-4.5 0-2.9-1.6-4.3-4.4-4.3h-2v8.8zM14 8h4.2l6 16h-4.3l-1-2.9h-5.6l-1 2.9H8l6-16zm.2 10h3.6L16 12.4 14.2 18z' })
  )
}
