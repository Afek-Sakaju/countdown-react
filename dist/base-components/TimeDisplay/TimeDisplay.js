"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TimeDisplay;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TimeDisplay = require("./TimeDisplay.styled");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function TimeDisplay(_ref) {
  var totalSeconds = _ref.totalSeconds,
    onDone = _ref.onDone,
    shouldStop = _ref.shouldStop;
  var _useState = (0, _react.useState)(totalSeconds),
    _useState2 = _slicedToArray(_useState, 2),
    time = _useState2[0],
    setTime = _useState2[1];
  var updatedSeconds = (0, _react.useRef)(totalSeconds);
  var isTimeZero = updatedSeconds.current === 0;
  (0, _react.useEffect)(function () {
    var intervalId = !shouldStop && !isTimeZero && setInterval(function () {
      setTime(function () {
        if (--updatedSeconds.current <= 0) {
          onDone === null || onDone === void 0 ? void 0 : onDone();
          clearInterval(intervalId);
        }
        return updatedSeconds.current;
      });
    }, 1000);
    return function () {
      // eslint-disable-next-line no-unused-expressions
      intervalId && clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var hours = "".concat(parseInt(time / 60 / 60)).padStart(2, "0");
  var minutes = "".concat(parseInt(time / 60 % 60)).padStart(2, "0");
  var seconds = "".concat(parseInt(time % 60)).padStart(2, "0");
  var timeUnitsText = hours === "00" ? "".concat(minutes, ":").concat(seconds) : "".concat(hours, ":").concat(minutes, ":").concat(seconds);
  return /*#__PURE__*/_react.default.createElement(_TimeDisplay.TimeDisplayContainer, null, timeUnitsText);
}
TimeDisplay.propTypes = {
  totalSeconds: _propTypes.default.number,
  onDone: _propTypes.default.func,
  shouldStop: _propTypes.default.bool
};
TimeDisplay.defaultProps = {
  totalSeconds: 2,
  onDone: undefined,
  shouldStop: undefined
};