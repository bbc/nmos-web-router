/*
Sort devices into single and bulk devices
*/

export default (changes) => {
  let devices = {single: [], bulk: []}
  if (changes.length > 1) {
    changes.forEach(change => {
      let thisDevice = change.receiver.device_id
      if (devices.single.indexOf(thisDevice) === -1) devices.single.push(thisDevice)
      else if (devices.bulk.indexOf(thisDevice) === -1) devices.bulk.push(thisDevice)
    })

    devices.single = devices.single.filter(thisDevice => {
      return devices.bulk.indexOf(thisDevice) === -1
    })
  } else {
    devices.single.push(changes[0].receiver.device_id)
  }
  return devices
}
