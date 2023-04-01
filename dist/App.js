"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
var _components = require("./components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/_react.default.createElement(_components.Countdown, {
    color1: "cyan",
    color2: "yellow",
    key: "1",
    size: "large",
    totalSeconds: 3605
  }), /*#__PURE__*/_react.default.createElement(_components.Countdown, {
    size: "medium",
    totalSeconds: 125
  }), /*#__PURE__*/_react.default.createElement(_components.Countdown, {
    size: "small",
    color1: "grey",
    color2: "lime",
    totalSeconds: 65
  }), /*#__PURE__*/_react.default.createElement(_components.Countdown, {
    color1: "cyan",
    color2: "yellow",
    key: "1",
    size: "large",
    totalSeconds: 40
  }), /*#__PURE__*/_react.default.createElement(_components.Countdown, {
    size: "medium",
    totalSeconds: 30
  }), /*#__PURE__*/_react.default.createElement(_components.Countdown, {
    size: "small",
    color1: "grey",
    color2: "lime",
    totalSeconds: 10
  }));
}
var _default = App;
exports.default = _default;