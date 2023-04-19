import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

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

export default function Countdown({
  size,
  color1,
  color2,
  totalSeconds,
  onDone,
  shouldStop,
}) {
  if (totalSeconds < MINIMUM_TIME_LIMIT) totalSeconds = MINIMUM_TIME_LIMIT;
  else if (totalSeconds > MAXIMUM_TIME_LIMIT) totalSeconds = MAXIMUM_TIME_LIMIT;

  size = assertCompatibleSize(size, COUNTDOWN_SIZES)
    ? size
    : COUNTDOWN_SIZES.medium;

  const gradientColorId = uuid();

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
          <defs>
            <linearGradient id={gradientColorId}>
              <stop offset="0%" stopColor={color1} />
              <stop offset="100%" stopColor={color2} />
            </linearGradient>
          </defs>
          <Circle
            size={size}
            duration={totalSeconds}
            gradientColorId={gradientColorId}
          />
        </CountdownSvg>
      </OuterContainer>
    </CountdownContentWrapper>
  );
}

Countdown.propTypes = {
  size: PropTypes.oneOf(Object.values(COUNTDOWN_SIZES)),
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
