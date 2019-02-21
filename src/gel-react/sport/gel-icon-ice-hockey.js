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
    { className: 'gel-icon gel-icon-ice-hockey', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M6 16.5l-6 15h2l7.7-11.7 3 3L7 31.5h2l7.3-7.3-9.7-8.7zM20 6.5h.2l2.5-4.3c-.5-1-1.5-1.7-2.7-1.7-1.7 0-3 1.3-3 3s1.3 3 3 3zM24.8 28.5L20 24.2V9.8l-2.6 4.7 1.1 8.4-.7-.6-3.8-4.8 5-9-7-4H5v7.6l19.6 17.7.4.8h7v-2h-7.2zm-17-15.2l-1.3-1.2.5-4.6h4l-3.2 5.8z' })
  )
}
