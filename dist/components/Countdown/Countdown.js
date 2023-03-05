"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _timeText = require("../../base-components/TimeText/timeText");
var _consts = require("../../consts");
require("./Countdown.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Countdown(_ref) {
  var radius = _ref.radius,
    totalSeconds = _ref.totalSeconds,
    remainColor = _ref.remainColor,
    elapsedColor = _ref.elapsedColor;
  if (totalSeconds < _consts.MINIMUM_TIME_LIMIT) totalSeconds = _consts.MINIMUM_TIME_LIMIT;else if (totalSeconds > _consts.MAXIMUM_TIME_LIMIT) totalSeconds = _consts.MAXIMUM_TIME_LIMIT;
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: "countdown-container"
  }, /*#__PURE__*/_react.default.createElement("g", {
    transform: "rotate(-90 ".concat(250 / 2, " ").concat(250 / 2, ")")
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "50%",
    cy: "45%",
    r: radius,
    fill: "none",
    stroke: elapsedColor,
    strokeWidth: "20"
  }), /*#__PURE__*/_react.default.createElement("circle", {
    className: "countdown-circle",
    cx: "50%",
    cy: "45%",
    r: radius,
    fill: "none",
    stroke: remainColor,
    strokeWidth: "20",
    transform: "",
    style: {
      animation: "stroke-animation ".concat(totalSeconds, "s linear forwards")
    }
  })), /*#__PURE__*/_react.default.createElement(_timeText.TimeText, {
    size: radius / 2.2,
    totalSeconds: totalSeconds
  }));
}
Countdown.propTypes = {
  totalSeconds: _propTypes.default.number,
  remainColor: _propTypes.default.string,
  elapsedColor: _propTypes.default.string,
  radius: _propTypes.default.number
};
Countdown.defaultProps = {
  totalSeconds: 50,
  remainColor: "green",
  elapsedColor: "grey",
  radius: 100
};
var _default = Countdown;
exports.default = _default;