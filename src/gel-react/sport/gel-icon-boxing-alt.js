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
    { className: 'gel-icon gel-icon-boxing-alt', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M14 25.98L12.02 24 14 22.02 15.98 24z' }),
    react.createElement('path', { d: 'M28 9h-3v5l-2 2V4l-4-4H7L3 4v12l3 7v9h16v-6l7-7v-9l-1-1zM17 19l-2 2 2 2v2l-2 2 2 2v1h-1l-2-2-2 2h-1v-1l2-2-2-2v-2l2-2-2-2v-1h1l2 2 2-2h1v1zm5-10l-3 2H7L4 9V5l3 4h12l3-4v4z' })
  )
}
