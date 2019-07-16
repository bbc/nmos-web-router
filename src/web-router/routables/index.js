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

import insert from './insert'
import expand from './expand'
import filter from './filter'
import route from './route'
import update from './update'
import check from './check'
import stageChange from './stage-change'
import deployChange from './deploy-change'
import unstageChange from './unstage-change'
import checkFor from './check-for'
import cloneRoutables from './common/clone-routables'

export default (data) => {
  /**
   * All the methods below mutate the `data` object. So to avoid mutating
   * state directly, the `data` object is cloned and then this cloned version
   * is passed into all the methods below. This allows the cloned version to
   * be mutated, without affecting the original state.
   *
   * Once all the changes to the cloned `data` have been applied, it can
   * be returned with the `view` method and merged into state.
   */
  data = cloneRoutables(data)

  return {
    check: check(data),
    update: {
      receivers (grains) {
        update(data).receivers(grains)
      },
      senders (grains) {
        update(data).senders(grains)
      },
      flows (grains) {
        update(data).flows(grains)
      }
    },
    route: route(data),
    unroute: route(data),
    filter: filter(data),
    expand: expand(data),
    contract: expand(data),
    insert: {
      receivers (newData) {
        return insert(data).receivers(newData)
      },
      senders (newData) {
        return insert(data).senders(newData)
      },
      flows (newData) {
        return insert(data).flows(newData)
      }
    },
    stageChange: stageChange(data),
    deployChange: deployChange(data),
    unstageChange: unstageChange(data),
    checkFor: checkFor(data),
    view () {
      data.expanded = data.expanded || {
        state: []
      }
      return data
    }
  }
}
