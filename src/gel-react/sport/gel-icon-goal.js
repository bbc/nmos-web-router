var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-goal', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 0v16h2v-4h3c.5-.9 1.3-2.6 2-3.3V7h2c.8-.5 2-1.3 3-1.6V2h3v3h2V2h3V5.3c.9.3 2.2 1.1 3 1.6h2v1.7c.7.8 1.5 2.3 2 3.3h3v4h2V0H0zm5 10H2V7h3v3zm0-5H2V2h3v3zm5 0H7V2h3v3zm15 0h-3V2h3v3zm5 5h-3V7h3v3zm0-5h-3V2h3v3z' }),
    react.createElement('circle', { fill: '#FFF', cx: '16', cy: '16.7', r: '10' }),
    react.createElement('path', { d: 'M12.6 15.6l1.3 4h4.2l1.3-4-3.4-2.5z' }),
    react.createElement('path', { d: 'M16 6C9.9 6 5 10.9 5 17s4.9 11 11 11 11-4.9 11-11S22.1 6 16 6zm7.8 17.2l-.2-1.6-3.7.8-1.9 3.2 1.5.7c-1.1.4-2.3.7-3.5.7-1.2 0-2.4-.2-3.5-.6l1.5-.7-1.9-3.2-3.7-.8-.2 1.6C6.9 21.5 6 19.4 6 17v-.4l1.1 1.2L9.7 15l-.4-3.7-1.6.3c1.3-2 3.3-3.5 5.7-4.1l-.8 1.4 3.4 1.5 3.4-1.5-.8-1.4c2.4.5 4.4 2 5.7 4l-1.6-.3-.4 3.7 2.5 2.8 1.1-1.2v.5c.1 2.3-.8 4.5-2.1 6.2z' })
  )
}
