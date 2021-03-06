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
    { className: 'gel-icon gel-icon-tennis', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M10.7 9.2c-.6 1-1.3 1.8-2.1 2.5l-.1.1c-.6.6-1.1 1.2-1.5 1.9-2.1 3.6-.8 8.2 2.7 10.2 1.7 1 3.8 1.3 5.7.7 1.9-.5 3.6-1.8 4.6-3.5.4-.6.6-1.3.8-2l.1-.3c.2-1.1.6-2.1 1.1-3.1 1.3-2.2 3.3-3.8 5.8-4.4 1.2-.3 2.3-.4 3.5-.3C30 7.4 27.6 4.2 24 2.1 20-.2 15.3-.6 11.2.8c1.1 2.6 1 5.7-.5 8.4z' }),
    react.createElement('path', { d: 'M28.2 13.2c-1.9.5-3.6 1.8-4.6 3.5-.3.6-.6 1.2-.8 1.9l-.1.6c-.2 1-.6 2-1.1 3-1.3 2.2-3.3 3.8-5.8 4.4-2.5.7-5 .3-7.2-.9-4.5-2.6-6.1-8.4-3.5-13 .5-.9 1.2-1.7 2-2.4l.3-.3c.5-.5 1-1.1 1.4-1.7 1.2-2.1 1.3-4.6.4-6.7C6.4 2.8 3.9 5 2.1 8-2.3 15.6.3 25.4 8 29.9c7.7 4.4 17.4 1.8 21.9-5.9 2-3.4 2.5-7.3 1.9-10.9-1.2-.2-2.4-.2-3.6.1z' })
  )
}
