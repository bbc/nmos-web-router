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
    { className: 'gel-icon gel-icon-fast-food-2', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 8h17v2H0zM32 26c0 2.08-1.493 5-4 5H14c-2.515 0-5-2.92-5-5h12l3 3 3-3h5z' }),
    react.createElement('path', { d: 'M6 26v-2c0-3.086 4.296-7 8-7h1.325L16 10H1l2 21h6.461C7.978 29.595 6 27.677 6 26z' }),
    react.createElement('path', { d: 'M27 19H14c-2.515 0-5 2.914-5 5h23c0-2.086-2.493-5-5-5zM6.944 16.262l1.993-.162L7.368.75 5.5 2.441z' })
  )
}
