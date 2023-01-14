import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./timeText.scss";

export function TimeText({ size, totalSeconds }) {
  const [time, setTime] = useState(totalSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time === 0) clearInterval(intervalId);
      else setTime((time) => time - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = `${parseInt(time / 60 / 60)}`.padStart(2, "0");
  const minutes = `${parseInt((time / 60) % 60)}`.padStart(2, "0");
  const seconds = `${parseInt(time % 60)}`.padStart(2, "0");
  const timeUnitsText =
    hours === "00" ? `${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`;

  return (
    <text x="45%" y="55%" textAnchor="middle" style={{ fontSize: `${size}px` }}>
      {timeUnitsText}
    </text>
  );
}

TimeText.propTypes = {
  totalSeconds: PropTypes.number,
  size: PropTypes.number,
};

TimeText.defaultProps = {
  totalSeconds: 50,
  size: 10,
};
