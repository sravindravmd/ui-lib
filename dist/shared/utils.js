"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lineBreak = void 0;

const lineBreak = string => string.replace(/\n/gi, '\n');

exports.lineBreak = lineBreak;