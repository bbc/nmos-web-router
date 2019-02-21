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
    { className: 'gel-icon gel-icon-tumblr', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M18 0v8.2h6.3V13h-6.4v8.3c0 1.9.2 2.8.4 3.3s.5.9 1 1.2c.5.3 1 .4 1.8.4.4 0 1.4-.1 2.5-.6l1.5 4.6c-.6.5-1.5 1.1-2.9 1.5-1.2.2-2 .3-3.2.3-1.4 0-2.3-.2-3.4-.6-1.1-.4-1.8-.9-2.6-1.6-.8-.7-1.3-1.4-1.7-2.2-.5-.8-1-2.2-1.1-3.8V13H7V8.8c1.2-.4 2.1-1 3-1.8 1.2-1.1 1.7-2 2.1-2.9.5-1 .9-2.5 1.1-4.1H18z' })
  )
}
