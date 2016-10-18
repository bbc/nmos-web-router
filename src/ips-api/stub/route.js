export default function (collections, delay) {
  return (id, sender) => {
    sender = sender || {}
    return new Promise((resolve, reject) => {
      function updateRoute () {
        let item = Object.assign({}, receiver)
        collections.receivers.emit('pre', item)
        let senderId = sender.id || null
        receiver.subscription = { sender_id: senderId }
        collections.receivers.update(receiver)
        setTimeout(function () {
          resolve(sender)
        }, delay)
      }

      let receiver = collections.receivers.findOne({ id })
      if (receiver === null) setTimeout(function () {
        reject('404 no receiver')
      }, delay)
      else {
        if (sender.id) {
          let foundSender = collections.senders.findOne({ id: sender.id })
          if (foundSender === null) setTimeout(function () {
            reject('404 no sender')
          }, delay)
          else updateRoute()
        } else updateRoute()
      }
    })
  }
}
