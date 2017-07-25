let transportMatches = (receiver, unicast) => {
  if (unicast.inUse) {
    if (receiver.transport.includes('rtp.mcast')) return false
  } else {
    if (receiver.transport.includes('rtp.ucast')) return false
  }
  return true
}

export default transportMatches
