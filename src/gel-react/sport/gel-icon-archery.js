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
    { className: 'gel-icon gel-icon-archery', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M24.9 7h2.6l3-3h-4V0l-3 3v2.6l-2.3 2.3c-1.6-1.4-3.6-2.3-5.7-2.7V3h-4v2.2c-5.7 1-10 5.9-10 11.8 0 4.4 2.4 8.2 5.9 10.3L4.9 32h3.4l1.8-3.5c1.1.3 2.2.5 3.4.5 1.2 0 2.3-.2 3.4-.5l1.9 3.5h3.4l-2.5-4.7c3.5-2.1 5.8-5.9 5.8-10.3 0-2.2-.6-4.3-1.7-6.1l-2.2 2.2c.6 1.2.9 2.5.9 3.9 0 5-4 9-9 9s-9-4-9-9 4-9 9-9c2.1 0 4.1.7 5.6 2l-1.4 1.4c-1.2-.9-2.6-1.4-4.2-1.4-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7c0-.8-.2-1.6-.4-2.4l-.8.8c.1.5.2 1 .2 1.6 0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c1.3 0 2.5.4 3.5 1.1l-2.2 2.2c-.4-.2-.8-.3-1.3-.3-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2h-2.4l11-11z' })
  )
}
