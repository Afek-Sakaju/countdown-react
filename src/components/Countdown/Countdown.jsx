import React from "react";
import PropTypes from "prop-types";

import { TimeText } from "../../base-components/TimeText/timeText";
import { MAXIMUM_TIME_LIMIT, MINIMUM_TIME_LIMIT } from "../../consts";
import "./Countdown.scss";

function Countdown({ radius, totalSeconds, remainColor, elapsedColor }) {
  if (totalSeconds < MINIMUM_TIME_LIMIT) totalSeconds = MINIMUM_TIME_LIMIT;
  else if (totalSeconds > MAXIMUM_TIME_LIMIT) totalSeconds = MAXIMUM_TIME_LIMIT;

  return (
    <svg className="countdown-container">
      <g transform={`rotate(-90 ${250 / 2} ${250 / 2})`}>
        <circle
          cx="50%"
          cy="45%"
          r={radius}
          fill="none"
          stroke={elapsedColor}
          strokeWidth="20"
        />
        <circle
          className="countdown-circle"
          cx="50%"
          cy="45%"
          r={radius}
          fill="none"
          stroke={remainColor}
          strokeWidth="20"
          transform={""}
          style={{
            animation: `stroke-animation ${totalSeconds}s linear forwards`,
          }}
        />
      </g>
      <TimeText size={radius / 2.2} totalSeconds={totalSeconds} />
    </svg>
  );
}

Countdown.propTypes = {
  totalSeconds: PropTypes.number,
  remainColor: PropTypes.string,
  elapsedColor: PropTypes.string,
  radius: PropTypes.number,
};

Countdown.defaultProps = {
  totalSeconds: 50,
  remainColor: "green",
  elapsedColor: "grey",
  radius: 100,
};

export default Countdown;
