import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function TimeDisplay({ totalSeconds, onDone, shouldStop }) {
  const [time, setTime] = useState(totalSeconds);
  const updatedSeconds = useRef(totalSeconds);
  const isTimeZero = updatedSeconds.current === 0;

  useEffect(() => {
    const intervalId =
      !shouldStop &&
      !isTimeZero &&
      setInterval(() => {
        setTime(() => {
          if (--updatedSeconds.current <= 0) {
            onDone?.();
            clearInterval(intervalId);
          }

          return updatedSeconds.current;
        });
      }, 1000);

    return () => {
      // eslint-disable-next-line no-unused-expressions
      intervalId && clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hours = `${parseInt(time / 60 / 60)}`.padStart(2, "0");
  const minutes = `${parseInt((time / 60) % 60)}`.padStart(2, "0");
  const seconds = `${parseInt(time % 60)}`.padStart(2, "0");
  const timeUnitsText =
    hours === "00" ? `${minutes}:${seconds}` : `${hours}:${minutes}:${seconds}`;

  return <div className="countdown-time-display">{timeUnitsText}</div>;
}

TimeDisplay.propTypes = {
  totalSeconds: PropTypes.number,
  onDone: PropTypes.func,
  shouldStop: PropTypes.bool,
};

TimeDisplay.defaultProps = {
  totalSeconds: 2,
  onDone: undefined,
  shouldStop: undefined,
};

export default TimeDisplay;
