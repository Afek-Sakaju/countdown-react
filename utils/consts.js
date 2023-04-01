"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MINIMUM_TIME_LIMIT = exports.MAXIMUM_TIME_LIMIT = exports.COUNTDOWN_SIZES = exports.COUNTDOWN_PROPERTIES = void 0;
var MINIMUM_TIME_LIMIT = 0;
exports.MINIMUM_TIME_LIMIT = MINIMUM_TIME_LIMIT;
var MAXIMUM_TIME_LIMIT = 359999;
exports.MAXIMUM_TIME_LIMIT = MAXIMUM_TIME_LIMIT;
var COUNTDOWN_SIZES = ["small", "medium", "large"];
exports.COUNTDOWN_SIZES = COUNTDOWN_SIZES;
var COUNTDOWN_PROPERTIES = {
  /* The wrapper's width and height are in numbers because
  the svg circle requires style fields that are calculated 
  using the properties of the wrapper 
  - The number related to px */
  small: {
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
  },
  medium: {
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
  },
  large: {
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
  }
};
exports.COUNTDOWN_PROPERTIES = COUNTDOWN_PROPERTIES;