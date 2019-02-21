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
    { className: 'gel-icon gel-icon-ice', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M20.9 17.1l2.3.3.4-2.5.9-5.9-.9-.1-.3-1.5-.9-4L22 2l-1.4-.2L11.9.5 10.5.3l-.6 1.3-2 3.6-.8 1.4-.9-.2-.9 5.9-.3 2.5 2.3.3.3-2.3 13.7 2-.4 2.3zM9.6 6.1l2-3.6 8.7 1.3.9 4L9.6 6.1zM16.2 24.5L4 18.4l1.6-1.5-.9-.2-1.6-.2L.7 19l11.8 5.9-8.7 6.7H7zM31.3 27.4l-12.2-6 2.2-2.2-.6-.1-1.9-.3-3 3.1 11.8 5.9-5 3.8h3.3z' })
  )
}
