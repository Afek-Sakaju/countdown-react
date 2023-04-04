"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OuterContainer = exports.InnerContainer = exports.CountdownSvg = exports.CountdownContentWrapper = exports.Circle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../../utils");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CountdownContentWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  height: ", "px;\n  width: ", "px;\n\n  > * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  .countdown-time-display {\n    font-size: ", ";\n  }\n"])), function (_ref) {
  var size = _ref.size;
  return _utils.COUNTDOWN_PROPERTIES[size].wrapper.height;
}, function (_ref2) {
  var size = _ref2.size;
  return _utils.COUNTDOWN_PROPERTIES[size].wrapper.width;
}, function (_ref3) {
  var size = _ref3.size;
  return _utils.COUNTDOWN_PROPERTIES[size].timeDisplay.fontSize;
});
exports.CountdownContentWrapper = CountdownContentWrapper;
var OuterContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: inherit;\n  height: inherit;\n\n  padding: 20px;\n  border-radius: 50%;\n  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),\n    -6px 6px 10px -1px rgba(255, 255, 255, 0.7);\n"])));
exports.OuterContainer = OuterContainer;
var InnerContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ", "px;\n  width: ", "px;\n\n  border-radius: 50%;\n  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),\n    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),\n    -0.5px -0.5px 0px rgba(255, 255, 255, 1),\n    0.5px 0.5px 0px rgba(0, 0, 0, 0.15);\n"])), function (_ref4) {
  var size = _ref4.size;
  return _utils.COUNTDOWN_PROPERTIES[size].wrapper.height - 40;
}, function (_ref5) {
  var size = _ref5.size;
  return _utils.COUNTDOWN_PROPERTIES[size].wrapper.width - 40;
});
exports.InnerContainer = InnerContainer;
var CountdownSvg = _styledComponents.default.svg.attrs({
  className: "countdown-svg",
  xmlns: "https://www.w3.org/2000/svg",
  version: "1.1"
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: inherit;\n  height: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n"])));
exports.CountdownSvg = CountdownSvg;
var CountdownStrokeAnimation = (0, _styledComponents.keyframes)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  0% {\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dashoffset: var(--dasharray);\n  }\n"])));

// duration is in time units of seconds
var styleCircleByProps = function styleCircleByProps(_ref6) {
  var size = _ref6.size,
    duration = _ref6.duration,
    gradientColorId = _ref6.gradientColorId;
  return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    --dasharray: ", "px;\n    stroke-dasharray: var(--dasharray);\n    stroke-dashoffset: var(--dasharray);\n    stroke: url(#", ");\n    cx: ", ";\n    cy: ", ";\n    r: ", ";\n    animation: ", " ", "s linear;\n  "])), _utils.COUNTDOWN_PROPERTIES[size].circle.dasharray, gradientColorId, _utils.COUNTDOWN_PROPERTIES[size].circle.cx, _utils.COUNTDOWN_PROPERTIES[size].circle.cy, _utils.COUNTDOWN_PROPERTIES[size].circle.r, CountdownStrokeAnimation, duration);
};
var Circle = _styledComponents.default.circle(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  strokelinecap: round;\n  stroke-width: 20px;\n  fill: none;\n  ", "\n"])), styleCircleByProps);
exports.Circle = Circle;