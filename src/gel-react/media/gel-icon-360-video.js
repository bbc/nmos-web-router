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
    { className: 'gel-icon gel-icon-360-video', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement(
      'g',
      { id: 'Layer_2' },
      react.createElement('path', { d: 'M11.2 26.5l10-6.5-10-6.5z' }),
      react.createElement('path', { d: 'M16 5.1C7.2 5.1.1 8.9.1 13.6c0 3.1 2.9 5.8 7.9 7.3v-3.1c-3-1-4.4-2.5-4.4-4.2 0-3 5.6-5.5 12.5-5.5s12.5 2.5 12.5 5.5c0 1.7-1.5 3.2-4.5 4.2V21c5-1.5 8-4.2 8-7.4C32 8.9 24.8 5.1 16 5.1z' })
    )
  )
}
