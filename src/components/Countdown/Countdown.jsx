import React from "react";
import PropTypes from "prop-types";

import "./Countdown.scss";
import { TimeText } from "../../base-components";
import {
  MAXIMUM_TIME_LIMIT,
  MINIMUM_TIME_LIMIT,
  isCompatibleSize,
} from "../../utils";

function Countdown({ size, color1, color2, totalSeconds, onDone, shouldStop }) {
  if (totalSeconds < MINIMUM_TIME_LIMIT) totalSeconds = MINIMUM_TIME_LIMIT;
  else if (totalSeconds > MAXIMUM_TIME_LIMIT) totalSeconds = MAXIMUM_TIME_LIMIT;

  const svgCircleClass = isCompatibleSize(size) ? size : "medium";
  let svgCircleStyle;

  // eslint-disable-next-line default-case
  switch (size) {
    case "small":
      svgCircleStyle = { cx: "80", cy: "80", r: "70" };
      break;
    case "medium":
      svgCircleStyle = { cx: "90", cy: "90", r: "80" };
      break;
    case "large":
      svgCircleStyle = { cx: "100", cy: "100", r: "90" };
      break;
  }

  return (
    <div className={`countdown-content-wrapper ${svgCircleClass}`}>
      <div className="outer-container">
        <div className="inner-container">
          <TimeText />
        </div>
        <svg
          className="countdown-svg"
          xmlns="https://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <linearGradient id="gradient-color">
              <stop offset="0%" stopColor={color1} />
              <stop offset="100%" stopColor={color2} />
            </linearGradient>
          </defs>
          <circle
            className="countdown-circle"
            strokeLinecap="round"
            cx={svgCircleStyle.cx}
            cy={svgCircleStyle.cy}
            r={svgCircleStyle.r}
          />
        </svg>
      </div>
    </div>
  );
}

Countdown.propTypes = {
  size: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
  totalSeconds: PropTypes.number,
  onDone: PropTypes.func,
  shouldStop: PropTypes.bool,
};

Countdown.defaultProps = {
  size: "medium",
  color1: "red",
  color2: "blue",
  totalSeconds: 50,
  onDone: undefined,
  shouldStop: undefined,
};

export default Countdown;
