"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _iconOverview = _interopRequireDefault(require("../../assets/images/icon-overview"));

var _iconPim = _interopRequireDefault(require("../../assets/images/icon-pim"));

var _iconXpm = _interopRequireDefault(require("../../assets/images/icon-xpm"));

var _iconOffers = _interopRequireDefault(require("../../assets/images/icon-offers"));

var _iconOms = _interopRequireDefault(require("../../assets/images/icon-oms"));

var _fabricLogo = _interopRequireDefault(require("../../assets/images/fabric-logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ProductLinks = props => {
  const {
    productLinks
  } = props;
  let icon = '';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "product-links"
  }, productLinks && productLinks.map((link, index) => {
    switch (link.icon) {
      case 'overview':
        icon = /*#__PURE__*/_react.default.createElement(_iconOverview.default, null);
        break;

      case 'pim':
        icon = /*#__PURE__*/_react.default.createElement(_iconPim.default, null);
        break;

      case 'xpm':
        icon = /*#__PURE__*/_react.default.createElement(_iconXpm.default, null);
        break;

      case 'offers':
        icon = /*#__PURE__*/_react.default.createElement(_iconOffers.default, null);
        break;

      case 'oms':
        icon = /*#__PURE__*/_react.default.createElement(_iconOms.default, null);
        break;

      default:
        icon = /*#__PURE__*/_react.default.createElement(_fabricLogo.default, null);
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: `product-link ${link.active ? 'active' : ''}`,
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: link.href,
      title: link.text
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "icon"
    }, icon), /*#__PURE__*/_react.default.createElement("span", {
      className: "text"
    }, link.text)));
  }));
};

ProductLinks.propTypes = {
  productLinks: _propTypes.default.array.isRequired
};
var _default = ProductLinks;
exports.default = _default;