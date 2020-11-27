"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownPropsWithFalse = exports.dropdownPropsWithTrue = exports.options = void 0;
const options = [{
  id: 1,
  name: 'Josh Weir'
}, {
  id: 2,
  name: 'Sarah Weir'
}, {
  id: 3,
  name: 'Alicia Weir'
}, {
  id: 4,
  name: 'Ashutosh Tiwari'
}];
exports.options = options;
const dropdownPropsWithTrue = {
  isDefault: true,
  options: [...options],
  titleLabel: 'Field Label',
  value: {
    id: 0,
    name: 'Menu Title'
  }
};
exports.dropdownPropsWithTrue = dropdownPropsWithTrue;
const dropdownPropsWithFalse = {
  isDefault: false,
  options: [...options],
  titleLabel: 'Field Label',
  value: {
    id: 0,
    name: 'Menu Title'
  }
};
exports.dropdownPropsWithFalse = dropdownPropsWithFalse;