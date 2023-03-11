"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Countdown", {
  enumerable: true,
  get: function get() {
    return _components.Countdown;
  }
});
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
require("./index.css");
var _App = _interopRequireDefault(require("./App"));
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
var _components = require("./components/");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* Hidden to prevent multiple calling ReactDOMClient.createRoot() 
in case someone using this as NPM package
unhide if you want to run the app ! 
*/

var root = document.getElementById("root");
_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_App.default, null), root);
(0, _reportWebVitals.default)();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, _reportWebVitals.default)();