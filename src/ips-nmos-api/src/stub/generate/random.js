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

const chance = require('chance')()
const RandExp = require('randexp')
const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/g
const formats = [
  'urn:x-nmos:format:video',
  'urn:x-nmos:format:audio',
  'urn:x-nmos:format:data',
  'urn:x-nmos:format:mux'
]
const transports = [
  'urn:x-nmos:transport:rtp',
  'urn:x-nmos:transport:rtp.ucast',
  'urn:x-nmos:transport:rtp.mcast',
  'urn:x-nmos:transport:dash'
]
const types = [
  'devices',
  'flows',
  'nodes',
  'receivers',
  'senders',
  'sources'
]
const videoTypes = [
  'video/raw',
  'video/H264',
  'video/vc2',
  'video/x-vc2',
  'video/x-pgf',
  'video/VP8'
]
const audioTypes = [
  'audio/L16',
  'audio/L24',
  'audio/L32',
  'audio/x-pgf',
  'audio/opus'
]
const dataTypes = [
  'video/smpte291',
  'application/x-pgf'
]
const muxTypes = [
  'video/SMPTE2022-6'
]

module.exports = {
  type () { return chance.pickone(types) },
  ms () { return chance.integer({min: 0, max: 10 * 1000}) },
  description () { return chance.pickone(['', chance.paragraph()]) },
  format () { return chance.pickone(formats) },
  tags () {
    let words = chance.integer({min: 0, max: 3})
    let keys = []
    if (words > 0) keys = chance.sentence({words}).split(' ')
    let tags = {}
    keys.forEach(key => {
      let words = chance.integer({min: 1, max: 3})
      tags[key] = chance.sentence({words}).split(' ')
    })
    return tags
  },
  caps (format) {
    let caps = {media_types: []}
    if (format === 'urn:x-nmos:format:video') caps.media_types = videoTypes
    else if (format === 'urn:x-nmos:format:audio') caps.media_types = audioTypes
    else if (format === 'urn:x-nmos:format:data') caps.media_types = dataTypes
    else if (format === 'urn:x-nmos:format:mux') caps.media_types = muxTypes
    return caps
  },
  label () { return chance.sentence() },
  transport () { return chance.pickone(transports) },
  id () { return new RandExp(regex).gen() },
  subscription () { return { sender_id: chance.pickone([null, this.id()]) } },
  url () { return chance.url() },
  ids () {
    let count = chance.integer({min: 0, max: 20})
    let ids = []
    for (let i = 0; i < count; i++) ids.push(this.id())
    return ids
  },
  hostname () { return chance.pickone(['', chance.word()]) },
  service () {
    return {
      href: chance.url(),
      type: chance.word()
    }
  },
  services () {
    let count = chance.integer({min: 0, max: 20})
    let services = []
    for (let i = 0; i < count; i++) services.push(this.service())
    return services
  },
  bool () { return chance.bool() },
  mediaType (format) {
    if (format === 'urn:x-nmos:format:video') return chance.pickone(videoTypes)
    else if (format === 'urn:x-nmos:format:audio') return chance.pickone(audioTypes)
    else if (format === 'urn:x-nmos:format:data') return chance.pickone(dataTypes)
    else if (format === 'urn:x-nmos:format:mux') return chance.pickone(muxTypes)
    return []
  }
}
