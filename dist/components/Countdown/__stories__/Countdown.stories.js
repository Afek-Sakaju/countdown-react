"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = exports.Custom = void 0;
var _react = _interopRequireDefault(require("react"));
var _Countdown = _interopRequireDefault(require("../Countdown"));
var _utils = require("../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: "components/CountDown",
  component: _Countdown.default,
  parameters: {
    controls: {
      exclude: /^(onDone|shouldStop)$/g
    }
  },
  decorators: [function (Story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "98vh",
        width: "98vw"
      }
    }, /*#__PURE__*/_react.default.createElement(Story, null));
  }]
};
exports.default = _default;
var Default = function Default() {
  return /*#__PURE__*/_react.default.createElement(_Countdown.default, null);
};
exports.Default = Default;
Default.decorators = [function (Story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "300px",
      height: "300px"
    }
  }, /*#__PURE__*/_react.default.createElement(Story, null));
}];
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Countdown.default, args);
};
var Custom = Template.bind({});
exports.Custom = Custom;
Custom.argTypes = {
  size: {
    control: "inline-radio",
    options: Object.values(_utils.COUNTDOWN_SIZES),
    defaultValue: _utils.COUNTDOWN_SIZES.medium
  },
  color1: {
    control: {
      type: "color"
    },
    defaultValue: "red"
  },
  color2: {
    control: {
      type: "color"
    },
    defaultValue: "blue"
  },
  shouldStop: {
    control: {
      type: "boolean"
    },
    defaultValue: false
  },
  totalSeconds: {
    control: {
      type: "number"
    },
    defaultValue: 50
  }
};
Custom.decorators = [function (Story) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "300px",
      height: "300px"
    }
  }, /*#__PURE__*/_react.default.createElement(Story, null));
}];