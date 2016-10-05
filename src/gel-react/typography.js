require('./gel-typography.css')
var react = require('react')

function cleanClassName(className) {
  return className.split(' ').filter(function (str) {
    return str !== ''
  }).join(' ').trim()
}

function convertGel(gel) {
  if (!gel.includes('gel-')) return 'gel-' + gel
  return gel
}

function GelTypography(ref) {
  var bold = ''
  if (ref.bold) bold = '-bold'

  var noTouch = ''
  if (ref.noTouch) ref.noTouch = 'no-touch'

  var typography = convertGel(ref.typography)

  var className = ref.className
  className = className || ''
  className = noTouch + ' ' + className + ' ' + typography + bold

  var ref2 = Object.assign({}, ref)
  delete ref2.bold
  delete ref2.noTouch
  delete ref2.typography
  delete ref2.children
  ref2.className = cleanClassName(className)

  return react.createElement('span', ref2, ref.children)
}

function create (typography) {
  return function (ref) {
    return react.createElement(GelTypography, Object.assign({
      typography: typography
    }, ref))
  }
}

var styles = {
  Canon: 'canon',
  Trafalgar: 'trafalgar',
  DoublePica: 'double-pica',
  GreatPrimer: 'great-primer',
  Pica: 'pica',
  LongPrimer: 'long-primer',
  Brevier: 'brevier',
  Minion: 'minion',
  BodyCopy: 'body-copy'
}

Object.keys(styles).forEach(key => {
  exports[key] = create(styles[key])
})
