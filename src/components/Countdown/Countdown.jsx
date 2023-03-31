import React from "react";
import PropTypes from "prop-types";

import {
  CountdownContentWrapper,
  OuterContainer,
  InnerContainer,
  Circle,
  CountdownSvg,
} from "./Countdown.styled";
import { TimeText } from "../../base-components";
import {
  MAXIMUM_TIME_LIMIT,
  MINIMUM_TIME_LIMIT,
  isCompatibleSize,
} from "../../utils";

function Countdown({ size, color1, color2, totalSeconds, onDone, shouldStop }) {
  if (totalSeconds < MINIMUM_TIME_LIMIT) totalSeconds = MINIMUM_TIME_LIMIT;
  else if (totalSeconds > MAXIMUM_TIME_LIMIT) totalSeconds = MAXIMUM_TIME_LIMIT;

  size = isCompatibleSize(size) ? size : "medium";

  return (
    <CountdownContentWrapper size={size}>
      <OuterContainer>
        <InnerContainer size={size}>
          <TimeText />
        </InnerContainer>
        <CountdownSvg>
          <defs>
            <linearGradient id="gradient-color">
              <stop offset="0%" stopColor={color1} />
              <stop offset="100%" stopColor={color2} />
            </linearGradient>
          </defs>
          <Circle size={size} />
        </CountdownSvg>
      </OuterContainer>
    </CountdownContentWrapper>
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
