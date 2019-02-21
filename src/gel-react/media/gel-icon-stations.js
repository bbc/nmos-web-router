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
    { className: 'gel-icon gel-icon-stations', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement(
      'g',
      { fill: '#000101' },
      react.createElement('path', { d: 'M13 16c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3M23.1 8.9L21 11c2.7 2.7 2.7 7.2 0 9.9l2.1 2.1c3.9-3.8 3.9-10.2 0-14.1' }),
      react.createElement('path', { d: 'M27.3 4.7l-2.1 2.1c5.1 5.1 5.1 13.3 0 18.4l2.1 2.1c6.3-6.2 6.3-16.4 0-22.6M8.9 23.1L11 21c-2.7-2.7-2.7-7.2 0-9.9L8.9 8.9C5 12.8 5 19.2 8.9 23.1' }),
      react.createElement('path', { d: 'M4.7 27.3l2.1-2.1c-5.1-5.1-5.1-13.3 0-18.4L4.7 4.7c-6.3 6.2-6.3 16.4 0 22.6' })
    )
  )
}
