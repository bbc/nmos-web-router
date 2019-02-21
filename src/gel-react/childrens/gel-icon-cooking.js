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
    { className: 'gel-icon gel-icon-cooking', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M17 6h9v20h-9zM21.8 5L23 3.5V0h-3v3.5l.8 1.5zM20.8 27l-.8.5V32h3v-4.5l-1.2-.5zM9.6 0C7.6 0 6 2.5 6 5.6s1.6 5.6 3.6 5.6 3.6-2.5 3.6-5.6S11.6 0 9.6 0zM9.5 13.5c-.5 0-1.4-.1-1.4-.2V31c0 .5.6 1 1.5 1s1.5-.4 1.5-1V13.2c-.1.2-1 .3-1.6.3z' })
  )
}
