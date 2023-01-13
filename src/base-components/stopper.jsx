import React from "react";
import PropTypes from "prop-types";
import "./stopper.scss";

export function Stopper({ id, activeColor, circleRadius, circleWidth }) {
  return (
    <div id="stopper-container">
      <svg width="200" height="200">
        <circle
          id={id}
          cx="80"
          cy="80"
          r={circleRadius}
          stroke={activeColor}
          stroke-width={circleWidth}
          fill="transparent"
        />
      </svg>
    </div>
  );
}

Stopper.propTypes = {
  id: PropTypes.string,
  activeColor: PropTypes.string,
  circleRadius: PropTypes.string,
  circleWidth: PropTypes.string,
};

Stopper.defaultProps = {
  activeColor: "green",
  circleRadius: "60",
  circleWidth: "5",
};
