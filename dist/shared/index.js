"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "theme", {
  enumerable: true,
  get: function () {
    return _theme.default;
  }
});
Object.defineProperty(exports, "media", {
  enumerable: true,
  get: function () {
    return _media.default;
  }
});

var _theme = _interopRequireDefault(require("./theme.js"));

var _media = _interopRequireDefault(require("./media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FONT_NAMES = ['h1', 'h2', 'h3', 'subtitle1', 'subtitle2', 'subtitle3', 'body', 'kicker', 'caption', 'link'];
FONT_NAMES.forEach(name => {
  const css = [];
  Object.keys(_theme.default.typography[name]).forEach(styleKey => {
    const dashKey = styleKey.replace(/.[A-Z]/, match => {
      return match[0] + '-' + match[1].toLowerCase();
    });
    css.push(`${dashKey}: ${_theme.default.typography[name][styleKey]}`);
  });
  _theme.default.typography[name].css = css.join(';\n');
});