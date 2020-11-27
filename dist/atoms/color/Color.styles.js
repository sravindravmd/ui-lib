"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledColorsContainer = exports.StyledColor = exports.StyledColorContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shared = require("../../shared");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledColorContainer = _styledComponents.default.div`
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${_shared.theme.typography.caption};
  color: ${_shared.theme.palette.brand.primary.gray};
  margin: 20px;
`;
exports.StyledColorContainer = StyledColorContainer;
const StyledColor = _styledComponents.default.div`
  width: 41px;
  height: 41px;
  border-radius: 100px;
  background-color: ${({
  color
}) => color};
  box-sizing: border-box;
  border: 1px solid ${_shared.theme.palette.brand.primary.gray};
`;
exports.StyledColor = StyledColor;
const StyledColorsContainer = _styledComponents.default.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
exports.StyledColorsContainer = StyledColorsContainer;