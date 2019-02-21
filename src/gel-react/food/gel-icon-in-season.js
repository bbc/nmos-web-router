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
    { className: 'gel-icon gel-icon-in-season', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M27 9.067V.001l-5.499 4.84L16 .001l-5.5 4.84L5 0v9.067C5 17.012 9.347 21.327 14.874 22H15v6.592L2 21.056v4.204L13.664 32H17V21.996c5.583-.6 10-4.936 10-12.929z' }),
    react.createElement('path', { d: 'M19.085 27.373v4.184L30 25.25v-4.188z' })
  )
}
