require('./gel-grid.css')

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

function convertLayout(layout) {
  if (!layout.includes('gel-layout--')) return 'gel-layout--' + layout
  return layout
}

function Wrap(ref) {
  var className = ref.className
  className = className || ''

  var gels = ref.gels
  if (typeof gels === 'string') gels = [gels]
  gels = gels || []
  gels = gels.map(convertGel).join(' ')
  className += ' ' + gels
  return react.createElement('div', {
    style: ref.style,
    className: 'gel-wrap ' + className
  }, ref.children)
}

function Layout(ref) {
  var layouts = ref.layouts
  if (typeof layouts === 'string') layouts = [layouts]
  layouts = layouts || []
  layouts = layouts.map(convertLayout).join(' ')

  var className = ref.className
  className = className || ''
  className = 'gel-layout ' + className + ' ' + layouts

  var gels = ref.gels
  if (typeof gels === 'string') gels = [gels]
  gels = gels || []
  gels = gels.map(convertGel).join(' ')
  className += ' ' + gels

  return react.createElement('div', {
      style: ref.style,
      className: cleanClassName(className)
    }, ref.children)
}

function LayoutItem(ref) {
  var gels = ref.gels
  if (typeof gels === 'string') gels = [gels]
  gels = gels || []
  gels = gels.map(convertGel).join(' ')

  var className = ref.className
  className = className || ''
  className = 'gel-layout__item ' + className + ' ' + gels

  return react.createElement('div', {
    style: ref.style,
    className: cleanClassName(className)
  }, ref.children)
}

exports.default = { Wrap: Wrap, Layout: Layout, LayoutItem: LayoutItem }
exports.Wrap = Wrap
exports.Layout = Layout
exports.LayoutItem = LayoutItem
