import React from "react";
import PropTypes from "prop-types";

import { MAXIMUM_TIME_LIMIT, MINIMUM_TIME_LIMIT } from "../../consts";
import "./Countdown.scss";

function Countdown({ totalSeconds, onDone, shouldStop }) {
  if (totalSeconds < MINIMUM_TIME_LIMIT) totalSeconds = MINIMUM_TIME_LIMIT;
  else if (totalSeconds > MAXIMUM_TIME_LIMIT) totalSeconds = MAXIMUM_TIME_LIMIT;

  return (
    <div className="skill">
      <div className="outer">
        <div className="inner">
          <div id="number">65%</div>
        </div>
        <svg
          className="countdown-svg"
          xmlns="https://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="gradient-color">
              <stop offset="0%" stopColor="red" />
              <stop offset="100%" stopColor="blue" />
            </linearGradient>
          </defs>
          <circle
            className="countdown-circle"
            cx="80"
            cy="80"
            r="70"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

Countdown.propTypes = {
  totalSeconds: PropTypes.number,
  onDone: PropTypes.func,
  shouldStop: PropTypes.bool,
};

Countdown.defaultProps = {
  totalSeconds: 50,
  onDone: undefined,
  shouldStop: undefined,
};

export default Countdown;
