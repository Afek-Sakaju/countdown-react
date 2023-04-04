"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MINIMUM_TIME_LIMIT = exports.MAXIMUM_TIME_LIMIT = exports.COUNTDOWN_SIZES = exports.COUNTDOWN_PROPERTIES = void 0;
var _COUNTDOWN_PROPERTIES;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MINIMUM_TIME_LIMIT = 0; // 00:00:00
exports.MINIMUM_TIME_LIMIT = MINIMUM_TIME_LIMIT;
var MAXIMUM_TIME_LIMIT = 359999; // 99:59:59
exports.MAXIMUM_TIME_LIMIT = MAXIMUM_TIME_LIMIT;
var COUNTDOWN_SIZES = {
  small: "small",
  medium: "medium",
  large: "large"
};
exports.COUNTDOWN_SIZES = COUNTDOWN_SIZES;
var COUNTDOWN_PROPERTIES = (_COUNTDOWN_PROPERTIES = {}, _defineProperty(_COUNTDOWN_PROPERTIES, COUNTDOWN_SIZES.small, {
  circle: {
    cx: 80,
    cy: 80,
    r: 70,
    dasharray: 450
  },
  timeDisplay: {
    fontSize: "1.45em"
  },
  wrapper: {
    width: 160,
    height: 160
  }
}), _defineProperty(_COUNTDOWN_PROPERTIES, COUNTDOWN_SIZES.medium, {
  circle: {
    cx: 90,
    cy: 90,
    r: 80,
    dasharray: 510
  },
  timeDisplay: {
    fontSize: "1.65em"
  },
  wrapper: {
    width: 180,
    height: 180
  }
}), _defineProperty(_COUNTDOWN_PROPERTIES, COUNTDOWN_SIZES.large, {
  circle: {
    cx: 100,
    cy: 100,
    r: 90,
    dasharray: 570
  },
  timeDisplay: {
    fontSize: "1.85em"
  },
  wrapper: {
    width: 200,
    height: 200
  }
}), _COUNTDOWN_PROPERTIES);
exports.COUNTDOWN_PROPERTIES = COUNTDOWN_PROPERTIES;