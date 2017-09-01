var axios = require('axios')

export default (nmos, bulkStuff) => {
  return nmos.devices(bulkStuff.deviceID)
  .then(device => {
    let controlHref = null
    if (device.controls) {
      let controlURN = 'urn:x-nmos:control:sr-ctrl/v1.0'
      device.controls.forEach(control => {
        if (control.type === controlURN) {
          controlHref = control.href
        }
      })
    }
    if (controlHref) {
      console.log('Attempting Connection Management API bulk route')
      if (controlHref.endsWith('/')) controlHref = controlHref.slice(0, controlHref.length - 1)
      var stageUrl = `${controlHref}/bulk/receivers`
      // Hack to avoid proxy on r730-3
      stageUrl = stageUrl.replace('123', '123:8856')

      var options = {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }

      let promises = []
      let transports = []
      bulkStuff.senders.forEach(sender => {
        if (sender) {
          let href = sender.manifest_href
          promises.push(axios.get(href))
        }
      })

      // Retrieve the transport files for any senders
      return axios.all(promises)
      .then(responses => {
        responses.forEach(response => {
          if (response.status === 200) transports.push(response.data)
          else transports.push('Placeholder')
        })

        let i = 0
        let transportCounter = 0
        let post = []
        // There should be one sender value for every receiver ID, the value
        // will be null if it is an unrouting change
        bulkStuff.senders.forEach(sender => {
          let thisPost = ''
          // Routing change therefore add in the corresponding transport file
          if (sender) {
            thisPost = {
              'id': bulkStuff.receiverIDs[i],
              'params': {
                'master_enable': true,
                'activation': {
                  'mode': 'activate_immediate'
                },
                'transport_file': {
                  'data': transports[transportCounter],
                  'type': 'application/sdp'
                }
              }
            }
            transportCounter++
          } else {
            // Unrouting change so no transport file
            thisPost = {
              'id': bulkStuff.receiverIDs[i],
              'params': {
                'master_enable': false,
                'activation': {
                  'mode': 'activate_immediate'
                }
              }
            }
          }
          post.push(thisPost)
          i++
        })
        return axios.post(stageUrl, post, options)
      })
      .then(response => {
        if (response.status !== 200) {
          return new Promise((resolve, reject) => {
            reject('Unable to carry out bulk routing')
          })
        }
        return response.data
      })
      .catch(error => {
        console.log('Error with bulk route request!')
        console.log(error)
      })
    }
  })
}
