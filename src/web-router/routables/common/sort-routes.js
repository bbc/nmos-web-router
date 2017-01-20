export default (left, right) => {
  left.sender = left.sender || {}
  right.sender = right.sender || {}

  let leftReceiverId = left.receiver.id
  let rightReceiverId = right.receiver.id
  let leftSenderId = left.sender.id
  let rightSenderId = right.sender.id
  if (leftReceiverId === rightReceiverId && leftSenderId === rightSenderId) return 0
  if (leftReceiverId < rightReceiverId && leftSenderId === rightSenderId) return -1
  if (leftReceiverId < rightReceiverId && leftSenderId < rightSenderId) return -2
  if (leftReceiverId < rightReceiverId && leftSenderId > rightSenderId) return -3
  if (leftReceiverId > rightReceiverId && leftSenderId === rightSenderId) return 1
  if (leftReceiverId > rightReceiverId && leftSenderId < rightSenderId) return 2
  if (leftReceiverId > rightReceiverId && leftSenderId > rightSenderId) return 3
  return 0
}
