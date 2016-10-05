var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-radio-dials', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('circle', { cx: '16', cy: '3', r: '3' }),
    react.createElement('circle', { cx: '7', cy: '7', r: '3' }),
    react.createElement('circle', { cx: '25', cy: '7', r: '3' }),
    react.createElement('circle', { cx: '29', cy: '16', r: '3' }),
    react.createElement('circle', { cx: '3', cy: '16', r: '3' }),
    react.createElement('circle', { cx: '16', cy: '29', r: '3' }),
    react.createElement('circle', { cx: '7', cy: '25', r: '3' }),
    react.createElement('circle', { cx: '25', cy: '25', r: '3' })
  );
};