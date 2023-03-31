import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function TimeText({ totalSeconds, cb, shouldStop }) {
  const [time, setTime] = useState(totalSeconds);
  const updatedSeconds = useRef(totalSeconds);
  const isTimeZero = updatedSeconds.current === 0;

  useEffect(() => {
    const intervalId =
      !shouldStop &&
      !isTimeZero &&
      setInterval(() => {
        setTime(() => {
          if (--updatedSeconds.current === 0) {
            cb?.();
            clearInterval(intervalId);
          }
          return updatedSeconds.current;
        });
      }, 1000);

    return () => {
      intervalId && clearInterval(intervalId);
    };
  });

  const hours = `${parseInt(time / 60 / 60)}`.padStart(2, "0");
  const minutes = `${parseInt((time / 60) % 60)}`.padStart(2, "0");
  const seconds = `${parseInt(time % 60)}`.padStart(2, "0");
  const timeUnitsText =
    hours === "00" ? `${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`;

  return <div className="countdown-time-text">{timeUnitsText}</div>;
}

TimeText.propTypes = {
  totalSeconds: PropTypes.number,
  cb: PropTypes.func,
  shouldStop: PropTypes.bool,
};

TimeText.defaultProps = {
  totalSeconds: 2,
  cb: undefined,
  shouldStop: undefined,
};

export default TimeText;
