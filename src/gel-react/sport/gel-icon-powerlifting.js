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
    { className: 'gel-icon gel-icon-powerlifting', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M9.1 24.6v-.2l-6.9-3.2c-1.4.9-2.3 2.5-2.1 4.3.3 2.5 2.5 4.3 5 4 2.4-.2 4.2-2.4 4-4.9z' }),
    react.createElement('circle', { cx: '14.2', cy: '9.9', r: '3.5' }),
    react.createElement('path', { d: 'M14.2 2.2c-4.2 0-7.7 3.4-7.7 7.7s3.4 7.7 7.7 7.7 7.7-3.4 7.7-7.7-3.5-7.7-7.7-7.7zm0 12.9c-2.9 0-5.2-2.3-5.2-5.2 0-2.9 2.3-5.2 5.2-5.2 2.9 0 5.2 2.3 5.2 5.2 0 2.8-2.4 5.2-5.2 5.2zM32 29l-18.2.8-4.2-1.1 3.3-9.5h2.6l.3 3.1h2.5l3.6 1.1 7.4.6 2.7.3' })
  )
}
