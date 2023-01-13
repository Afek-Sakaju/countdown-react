import React from "react";
import PropTypes from "prop-types";

import { TimeText } from "../timeText/timeText";
import { MAXIMUM_TIME_LIMIT, MINIMUM_TIME_LIMIT } from "../../consts";
import "./stopper.scss";

export function Stopper({ id, totalSeconds, remainColor, elapsedColor }) {
  if (totalSeconds < MINIMUM_TIME_LIMIT) totalSeconds = MINIMUM_TIME_LIMIT;
  else if (totalSeconds > MAXIMUM_TIME_LIMIT) totalSeconds = MAXIMUM_TIME_LIMIT;

  return (
    <svg id="stopper-container">
      <circle
        cx="50%"
        cy="45%"
        r="250"
        fill="none"
        stroke={elapsedColor}
        stroke-width="20"
      />
      <circle
        id={id}
        className="stopper-circle"
        cx="50%"
        cy="45%"
        r="250"
        fill="none"
        stroke={remainColor}
        stroke-width="20"
        style={{
          animation: `stroke-animation ${totalSeconds}s linear forwards`,
        }}
      />

      <TimeText id="timer-text" totalSeconds={totalSeconds}></TimeText>
    </svg>
  );
}

Stopper.propTypes = {
  id: PropTypes.string,
  circleRadius: PropTypes.string,
  totalSeconds: PropTypes.string,
  remainColor: PropTypes.string,
  elapsedColor: PropTypes.string,
};

Stopper.defaultProps = {
  circleRadius: "250",
  totalSeconds: "50",
  remainColor: "green",
  elapsedColor: "grey",
};
