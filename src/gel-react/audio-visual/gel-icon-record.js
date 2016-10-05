var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-record', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('circle', { cx: '16', cy: '16', r: '16' }),
    react.createElement('path', { fill: '#FFF', d: 'M23.9 24l-3.2-5.9c1.8-.7 2.8-2.3 2.8-5 0-3.8-2.8-5.1-5.8-5.1h-7.6v16h4.2v-5.3h2.5l2.9 5.3h4.2zm-9.6-12.6h2.8c1.3 0 2.2.6 2.2 2.1s-.9 2-2.2 2h-2.8v-4.1z' })
  );
};