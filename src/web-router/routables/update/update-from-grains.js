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

import View from '../view'
import isEmpty from '../common/is-empty'
const noop = () => {}

export default ({add, remove, grains, data}) => {
  grains.forEach(grain => {
    let hasPost = 'post' in grain && !isEmpty(grain.post)
    let hasPre = 'pre' in grain && !isEmpty(grain.pre)
    let map = noop
    if (hasPost) map = add
    else if (hasPre) map = remove
    map({data, grain})
  })
  return View(data)
}
