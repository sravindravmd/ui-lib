"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalWrapper = exports.StyledModalFooter = exports.StyledModalHeader = exports.ModalOverlay = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = _interopRequireDefault(require("../../shared/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const smallCss = (0, _styledComponents.css)`
  max-width: 27.75rem;
`;
const mediumCss = (0, _styledComponents.css)`
  max-width: 48.6875rem;
`;
const largeCss = (0, _styledComponents.css)`
  max-width: 90%;
`;
const maxSizeMap = new Map();
maxSizeMap.set('small', smallCss);
maxSizeMap.set('medium', mediumCss);
maxSizeMap.set('large', largeCss);
const ModalOverlay = (0, _styledComponents.default)('div')`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #121213;
  opacity: 0.75;
`;
exports.ModalOverlay = ModalOverlay;
const StyledModalHeader = (0, _styledComponents.default)('div')`
  display: flex;
  justify-content: flex-end;
  font-family: ${_theme.default.typography.caption.fontFamily};
  margin-bottom: 3rem;
`;
exports.StyledModalHeader = StyledModalHeader;
const StyledModalFooter = (0, _styledComponents.default)('div')`
  display: flex;
  justify-content: flex-end;
  font-family: ${_theme.default.typography.caption.fontFamily};
  margin-top: 3rem;
`;
exports.StyledModalFooter = StyledModalFooter;
const ModalWrapper = (0, _styledComponents.default)('div')`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  font-family: ${_theme.default.typography.caption.fontFamily};
  .content-wrapper {
  }
  .cross-btn {
    position: absolute;
    top: 23px;
    right: 23px;
    ${({
  size
}) => maxSizeMap.get(`${size}`)};
    display: flex;
    padding-right: 3.125;
    justify-content: flex-end;
  }
  .modal {
    z-index: 100;
    background: white;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 0.1875rem;
    ${({
  size
}) => maxSizeMap.get(`${size}`)};
  }

  .modal-header {
    display: flex;
    justify-content: flex-end;
  }

  .modal-close-button {
    margin-right: 8px;
    border: none;
  }

  button {
    display: block;
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
  }
  .modal-titel {
    font-size: 1.125rem;
  }
  .modal-body {
    font-size: 0.8125rem;
    margin-top: 1.3125rem;
  }
`;
exports.ModalWrapper = ModalWrapper;