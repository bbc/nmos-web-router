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
    { className: 'gel-icon gel-icon-duplicate', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement(
      'g',
      { id: 'Layer_2' },
      react.createElement('path', { d: 'M15 0H0v26h13V8h8V6l-6-6zm-4 6v17.988L2 24V2h12.172l4 4H11z' }),
      react.createElement('path', { d: 'M5.734 10.738H11v2H5.734zM5.734 13.738H11v2H5.734zM5.734 16.988H11v2H5.734zM26 6H11v26h21V12l-6-6zm4 24H13V8h12.172L30 12.829V30z' }),
      react.createElement('path', { d: 'M16.734 16.738h9v2h-9zM16.734 19.738h9v2h-9zM16.734 22.988h9v2h-9z' })
    )
  )
}
