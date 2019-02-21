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

/* Change the 'allVisibleState' if the checked value of some routables has been
changed by restoring the contents of window.sessionStorage */

export default (senders, receivers, choose) => {
  let setAllVisibleState = (routables, type) => {
    let unchecked = 0
    routables.forEach(routable => {
      if (routable.state.includes('unchecked')) unchecked++
    })
    if (unchecked === routables.length && unchecked !== 0) choose.allVisibleState[type] = 'none'
    else if (unchecked > 0) choose.allVisibleState[type] = 'some'
  }

  if (senders) setAllVisibleState(senders, 'senders')
  if (receivers) setAllVisibleState(receivers, 'receivers')

  return choose
}
