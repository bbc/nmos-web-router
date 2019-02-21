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
    { className: 'gel-icon gel-icon-send-ins', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M30.9 18.3l1-10.9-4-.4-1.2-4.5-12 3.2L2.1 4.6l-.4 4.6-1.7.5 1.2 4.4L.2 25l4 .4 1.1 4.1 11-2.9L30 27.8l.5-5.1 1.5-.4-1.1-4zm-2.7 7.3L2.4 23.2 3.9 6.8l25.9 2.5-1.6 16.3z' }),
    react.createElement('path', { d: 'M15.5 14.2c1 .1 1.8-.6 1.9-1.6.1-1-.6-1.8-1.6-1.9-1-.1-1.8.6-1.9 1.6-.1 1 .6 1.8 1.6 1.9zM15.4 21.5h.1l-2.4-5.7-4.2 5.1 6.3.6zM17.1 20.8l5.2.5-2.5-7.7-4.3 3.2z' })
  )
}
