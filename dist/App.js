"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("./components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/_react.default.createElement(_components.Countdown, {
    totalSeconds: 120,
    elapsedColor: "blue",
    remainColor: "purple"
  }), /*#__PURE__*/_react.default.createElement(_components.Countdown, {
    totalSeconds: 62
  }));
}
var _default = App;
exports.default = _default;