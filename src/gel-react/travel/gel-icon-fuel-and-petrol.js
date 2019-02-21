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
    { className: 'gel-icon gel-icon-fuel-and-petrol', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M21 11V0H5v29H2v3h22v-3h-3V13m-2 3H7V4h12v12z' }),
    react.createElement('path', { d: 'M26 27.4l-3-3V14h-2v-2h4v11.6l1 1 1-1V8.4l-3.7-3.7 1.4-1.4L29 7.6v16.8z' })
  )
}
