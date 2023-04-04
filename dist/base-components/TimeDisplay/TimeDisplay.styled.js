"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeDisplayContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TimeDisplayContainer = _styledComponents.default.div.attrs({
  className: "countdown-time-display"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 1em;\n  font-weight: bold;\n"])));
exports.TimeDisplayContainer = TimeDisplayContainer;