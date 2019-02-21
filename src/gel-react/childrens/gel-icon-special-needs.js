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
    { className: 'gel-icon gel-icon-special-needs', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 22.5l1-2h5v-3h-5.8l-4-4.8c-.7-.8-1.1-1.5-1.1-1.5-.7-1-1.1-2.5-1.1-3.8 0-2.7 2.2-4.9 4.9-4.9 1.7 0 3.3.9 4.2 2.4l.9 1.4.9-1.4c.9-1.5 2.5-2.4 4.2-2.4 2.7 0 4.9 2.2 4.9 4.9 0 1.3-.4 2.8-1.1 3.8 0 0-.4.6-1.1 1.4L24 17.2v3.1l5.3-6.3c.8-1 1.3-1.7 1.3-1.7.9-1.4 1.4-3.2 1.4-4.9C32 3.6 28.9.5 25.1.5c-2 0-3.8.8-5.1 2.2C18.7 1.3 16.9.5 14.9.5 11.1.5 8 3.6 8 7.4c0 1.7.5 3.5 1.4 4.9 0 0 .5.7 1.3 1.7l2.9 3.5H13l-7 6v7h8l9-2 9-4v-4l-7 2h-9zM0 22.5h4v9H0z' })
  )
}
