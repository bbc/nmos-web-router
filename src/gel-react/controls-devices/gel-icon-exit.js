var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-exit', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M8 0v5l2-2V2h20v28H10v-1l-2-2v5h24V0z' }),
    react.createElement('path', { d: 'M12 4L0 16l12 12 4-4-5.4-5H27v-6H10.6L16 8z' })
  );
};