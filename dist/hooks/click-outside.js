"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

const useClickOutside = (ref, callback, isOpen) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  (0, _react.useEffect)(() => {
    if (isOpen) {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
  }, [isOpen]);
};

var _default = useClickOutside;
exports.default = _default;