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
    { className: 'gel-icon gel-icon-generic-events', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 21h5v2H0v2h5v2H0v3h9v-5h6v5h2v-5h6v5h9v-3h-5v-2h5v-2h-5v-2h5v-2H0zM2 13l-2 2v2h32v-2l-2-2zM5 2h1v10H5zM24 2h1v10h-1zM11 4l2-2H7v4h6zM32 2h-6v4h6l-2-2z' })
  )
}
