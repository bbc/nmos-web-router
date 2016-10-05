var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-yellow-flag', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 3h1v27H0z' }),
    react.createElement('path', { fill: '#FFD324', d: 'M1 3h16v22H1z' }),
    react.createElement('path', { fill: '#FFD324', d: 'M15 0h17v21H15z' }),
    react.createElement('path', { fill: '#FFF', d: 'M18 24l-1 1V3h1z' }),
    react.createElement('path', { fill: '#1C1C1C', d: 'M18 3l-3-3v3z' })
  );
};