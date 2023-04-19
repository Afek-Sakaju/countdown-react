import React from "react";
import PropTypes from "prop-types";

import { TimeDisplay } from "@countdown@base-components";
import {
  MAXIMUM_TIME_LIMIT,
  MINIMUM_TIME_LIMIT,
  COUNTDOWN_SIZES,
  assertCompatibleSize,
} from "@countdown@utils";
import {
  CountdownContentWrapper,
  OuterContainer,
  InnerContainer,
  Circle,
  CountdownSvg,
} from "./Countdown.styled";

export default function Countdown({ size, totalSeconds, onDone, shouldStop }) {
  if (totalSeconds < MINIMUM_TIME_LIMIT) totalSeconds = MINIMUM_TIME_LIMIT;
  else if (totalSeconds > MAXIMUM_TIME_LIMIT) totalSeconds = MAXIMUM_TIME_LIMIT;

  size = assertCompatibleSize(size, COUNTDOWN_SIZES)
    ? size
    : COUNTDOWN_SIZES.medium;

  return (
    <CountdownContentWrapper size={size}>
      <OuterContainer>
        <InnerContainer size={size}>
          <TimeDisplay
            totalSeconds={totalSeconds}
            onDone={onDone}
            shouldStop={shouldStop}
          />
        </InnerContainer>
        <CountdownSvg>
          <defs />
          <Circle size={size} duration={totalSeconds} />
        </CountdownSvg>
      </OuterContainer>
    </CountdownContentWrapper>
  );
}

Countdown.propTypes = {
  size: PropTypes.oneOf(Object.values(COUNTDOWN_SIZES)),
  totalSeconds: PropTypes.number,
  onDone: PropTypes.func,
  shouldStop: PropTypes.bool,
};

Countdown.defaultProps = {
  size: "medium",
  totalSeconds: 50,
  onDone: undefined,
  shouldStop: undefined,
};
