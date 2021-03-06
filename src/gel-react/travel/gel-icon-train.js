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
    { className: 'gel-icon gel-icon-train', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M23 0c-4.5 0-7.1 3.1-9 5L4 15h4l-3 3H1l-1 1 8 8h5v-4h19V0h-9zm-3 13h-7v-3l5-5h2v8zm6 0h-4V5h4v8z' }),
    react.createElement('path', { d: 'M15 27.6c0 2.4 2.1 4.4 4.5 4.4 2 0 3.6-1.3 4.2-3h4.1c.6 1.7 2.2 3 4.2 3v-7H15v2.6z' })
  )
}
