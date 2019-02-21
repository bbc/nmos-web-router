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
    { className: 'gel-icon gel-icon-feedback', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M14 2v6h6v8h6l6 6V2H14zm16 12h-8v-2h8v2zm0-4h-8V8h8v2zm0-4H16V4h14v2z' }),
    react.createElement('path', { d: 'M0 24v6l6-6h12V10H0v14zm2-12h14v2H2v-2zm0 4h10v2H2v-2zm0 4h12v2H2v-2z' })
  )
}
