"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

const useKeyPress = function (targetKey, isOpen) {
  const [keyPressed, setKeyPressed] = (0, _react.useState)(false);

  function downHandler({
    key
  }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({
    key
  }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  (0, _react.useEffect)(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [isOpen]);
  return keyPressed;
};

var _default = useKeyPress;
exports.default = _default;