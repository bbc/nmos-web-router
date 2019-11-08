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

import fuzzysearch from 'fuzzysearch'
import mapState from '../common/map-state'
import stateToString from '../common/state-to-string'
import { AND } from '../../constants/filterOperators'
import { FUZZY_SEARCH, INCLUDES } from '../../constants/filterMethods'

/**
 * Applies Key-value pair or advanced filtering to routables.
 *
 * Expects the `conditions` property to be provided in one of the
 * following structures:
 *  - Basic key-value pair filtering:
  *  { [routablePropertyName:String]: searchTermItShouldInclude:String }
  *  e.g.
  *  ```
  *  {'transport': 'rtp', 'format': 'video'}
  *  ```
 *  - Advanced filtering:
 *    {
 *      operator: String, // see "constants/filterOperators.js" for options
 *      terms: [
 *        props: [String],
 *        term: String|Number|Boolean,
 *        method: String, // see "constants/filterMethods.js" for options
 *        operator: String // see "constants/filterOperators.js" for options
 *      ]
 *    }
 *    e.g.
 *    ```
 *    {
 *      operator: AND,
 *      terms: [
 *        {
 *          props: ['label', 'id'],
 *          term: 'my search term',
 *          method: FUZZY_SEARCH,
 *          operator: OR
 *        }, {
 *          props: ['transport'],
 *          term: 'rtp',
 *          method: INCLUDES}
 *        }
 *      ]
 *    }
 *    ```
 */
export default (conditions, routables) => {
  // Extract the required advanced filtering properties
  const { operator, terms } = conditions

  // Determine filtering mode from the conditions properties
  const advancedFiltering = operator !== undefined && terms !== undefined

  // Apply filtering to all routable items
  routables.forEach(routable => {
    let allFiltersMatch = false

    if (advancedFiltering) {
      // Build the advanced conditions and filter
      allFiltersMatch = Object.values(terms).reduce(
        (acc, { props, method, operator: conditionOperator, term }) => {
          // Filter by all the provided properties
          let filterMatch = props.reduce((acc1, propKey) => {
            let result = true

            switch (method) {
              case FUZZY_SEARCH:
                result = fuzzysearch(term.toLowerCase(), routable[propKey].toLowerCase())
                break
              case INCLUDES:
                result = routable[propKey].includes(term)
                break
            }
            return conditionOperator === AND ? acc1 && result : acc1 || result
          }, false)

          return operator === AND ? acc && filterMatch : acc || filterMatch
        },
        true
      )
    } else {
      // Filter by all key-value pairs
      allFiltersMatch = Object.entries(conditions).reduce(
        (acc, [key, searchTerm]) => routable[key].includes(searchTerm) && acc,
        true
      )
    }

    let routableMapState = mapState(routable)
    if (allFiltersMatch) routableMapState.fuzzymatch()
    else routableMapState.fuzzymissmatch()
    routable.state = routableMapState.state()
    routable.stateString = stateToString(routable.state)
  })
}
