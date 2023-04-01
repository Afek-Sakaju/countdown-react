"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _uuid = require("uuid");
var _Countdown = require("./Countdown.styled");
var _baseComponents = require("../../base-components");
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Countdown(_ref) {
  var size = _ref.size,
    color1 = _ref.color1,
    color2 = _ref.color2,
    totalSeconds = _ref.totalSeconds,
    onDone = _ref.onDone,
    shouldStop = _ref.shouldStop;
  if (totalSeconds < _utils.MINIMUM_TIME_LIMIT) totalSeconds = _utils.MINIMUM_TIME_LIMIT;else if (totalSeconds > _utils.MAXIMUM_TIME_LIMIT) totalSeconds = _utils.MAXIMUM_TIME_LIMIT;
  size = (0, _utils.isCompatibleSize)(size) ? size : "medium";
  var gradientColorId = (0, _uuid.v4)();
  return /*#__PURE__*/_react.default.createElement(_Countdown.CountdownContentWrapper, {
    size: size
  }, /*#__PURE__*/_react.default.createElement(_Countdown.OuterContainer, null, /*#__PURE__*/_react.default.createElement(_Countdown.InnerContainer, {
    size: size
  }, /*#__PURE__*/_react.default.createElement(_baseComponents.TimeDisplay, {
    totalSeconds: totalSeconds,
    onDone: onDone,
    shouldStop: shouldStop
  })), /*#__PURE__*/_react.default.createElement(_Countdown.CountdownSvg, null, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: gradientColorId
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    stopColor: color1
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    stopColor: color2
  }))), /*#__PURE__*/_react.default.createElement(_Countdown.Circle, {
    size: size,
    duration: totalSeconds,
    gradientColorId: gradientColorId
  }))));
}
Countdown.propTypes = {
  size: _propTypes.default.string,
  color1: _propTypes.default.string,
  color2: _propTypes.default.string,
  totalSeconds: _propTypes.default.number,
  onDone: _propTypes.default.func,
  shouldStop: _propTypes.default.bool
};
Countdown.defaultProps = {
  size: "medium",
  color1: "red",
  color2: "blue",
  totalSeconds: 50,
  onDone: undefined,
  shouldStop: undefined
};
var _default = Countdown;
exports.default = _default;