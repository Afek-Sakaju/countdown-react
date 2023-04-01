"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCompatibleSize = isCompatibleSize;
var _consts = require("./consts");
function isCompatibleSize(size) {
  return _consts.COUNTDOWN_SIZES.some(function (compatibleSize) {
    return compatibleSize.toLowerCase() === size.toLowerCase();
  });
}