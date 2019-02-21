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
    { className: 'gel-icon gel-icon-ips-video', xmlns: 'http://www.w3.org/2000/svg', width: '165', height: '165', viewBox: '0 0 165 165' },
    react.createElement('circle', { fill: 'none', strokeWidth: '8', strokeMiterlimit: '10', cx: '35.605', cy: '72.583', r: '11.651' }),
    react.createElement('circle', { fill: 'none', strokeWidth: '8', strokeMiterlimit: '10', cx: '89.824', cy: '55.107', r: '30.918' }),
    react.createElement('polyline', { fill: 'none', strokeWidth: '8', strokeLinejoin: 'round', strokeMiterlimit: '10', points: '148,77 160, 77 160,119 148, 119 ' }),
    react.createElement('path', {fill: 'none', strokeWidth: '8', strokeMiterlimit: '10', d: 'M130.621,53.844c2.475,0,5.379,1.926,5.379,4.4 v75.28c0,2.475-3.223,6.476-5.698,6.476H13.648C11.173,140,6,135.999,6,133.524l0,0v-56.46c0-2.474,3.035-4.107,5.51-4.107'})
  )
}
