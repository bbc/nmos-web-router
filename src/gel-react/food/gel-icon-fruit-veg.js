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
    { className: 'gel-icon gel-icon-fruit-veg', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M11.07 1.356C10.671.558 9.884 0 8.849 0S7.026.558 6.627 1.356C5.258 1.571 4.18 2.64 4.18 3.934c0 1.22 1.193 2.274 2.448 2.566L6.627 12h4.444V6.5c1.254-.292 2.411-1.346 2.411-2.566 0-1.294-1.043-2.363-2.412-2.578zM21.294 9v1.678c1-1.384 3.265-1.719 4.021-1.719.166 0 .179.016.204.041.137.137.032 1.922-1.046 3-.626.626-1.506.902-2.147 1.002L24.438 13c2.229.296 4.979 2.059 4.979 6.031 0 4.005-2.602 8.969-6.019 8.969-1.089 0-1.743-.5-2.033-.5-.393 0-1.004.5-2.063.5-3.078 0-6.125-5.066-6.125-8.969 0-4.062 2.671-5.791 4.933-6.024l2.184-.003V9h1z' }),
    react.createElement('path', { d: 'M11.177 19.029c0-3.454 1.418-5.631 3.22-6.839.002-.063.007-.126.007-.19 0-1.473-1.508-3.398-3.334-3.979-.721-.229-1.492-.312-2.239-.312-.737-.001-1.494.067-2.203.291-1.828.577-3.334 2.52-3.334 4 0 3.434 3.275 15.912 3.744 18 .235 1.046.841 2 1.811 2s1.542-.983 1.776-2.008c.112-.49.805-3.568 1.459-6.487-.574-1.465-.907-3.017-.907-4.476z' })
  )
}
