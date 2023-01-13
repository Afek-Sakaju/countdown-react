import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./timeText.scss";

export function TimeText({ id, totalSeconds }) {
  const [time, setTime] = useState(totalSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time === 0) clearInterval(intervalId);
      else setTime((time) => time - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const hours = `${parseInt(time / 60 / 60)}`.padStart(2, "0");
  const minutes = `${parseInt((time / 60) % 60)}`.padStart(2, "0");
  const seconds = `${parseInt(time % 60)}`.padStart(2, "0");

  const timeUnitsText =
    hours === "00" ? `${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`;
  return (
    <text id={id} className="timeText" x="50%" y="50%" text-anchor="middle">
      {timeUnitsText}
    </text>
  );
}

TimeText.propTypes = {
  id: PropTypes.string,
  totalSeconds: PropTypes.string,
};

TimeText.defaultProps = {
  totalSeconds: "50",
};
