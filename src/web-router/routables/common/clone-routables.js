import clone from 'clone'

export default (data) => {
  data = data || {}
  data.senders = data.senders || []
  data.flows = data.flows || []
  data.receivers = data.receivers || []
  data.routes = data.routes || []

  data.senders = clone(data.senders)
  data.flows = clone(data.flows)
  data.receivers = clone(data.receivers)
  data.routes = clone(data.routes)

  return data
}
