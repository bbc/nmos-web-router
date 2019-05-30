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

export default (actions) => {
  return (error) => {
    let message = error
    if (error.message) message = error.message
    if (error.response) {
      if (error.response.data.error) message = error.response.data.error // pull out error message from webAPI errorhandler
      if (error.response.data.error_description) message = error.response.data.error_description // Authlib errors
    }
    console.error(error)
    let timeout = setTimeout(function () {
      actions.allClear()
    }, 30 * 1000)
    actions.alert({
      message,
      timeout
    })
  }
}
