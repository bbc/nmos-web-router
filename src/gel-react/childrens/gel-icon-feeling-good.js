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
    { className: 'gel-icon gel-icon-feeling-good', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 6C10.5 6 6 10.5 6 16s4.5 10 10 10 10-4.5 10-10S21.5 6 16 6zm0 17c-2.8 0-5-2.2-5-5h10c0 2.8-2.2 5-5 5zM15 0h2v4h-2zM15 28h2v4h-2zM8.855 1.656l2 3.464-1.731 1-2-3.464zM23.121 30.37l-2-3.465 1.732-1 2 3.464zM2.67 7.142l3.463 2-1 1.732-3.464-2zM29.386 24.874l-3.464-2 1-1.732 3.464 2zM2.654 24.847l-1-1.732 3.465-2 1 1.733zM29.342 7.108l1 1.732-3.464 2-1-1.732zM8.873 30.363l-1.732-1 2-3.464 1.732 1zM23.12 1.663l1.731 1-2 3.464-1.732-1zM28 15h4v2h-4zM0 15h4v2H0z' })
  )
}
