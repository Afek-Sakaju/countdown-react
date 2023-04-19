import styled, { css, keyframes } from "styled-components";

import { COUNTDOWN_PROPERTIES } from "@countdown@utils";

export const CountdownContentWrapper = styled.div`
  position: relative;
  height: ${({ size }) => COUNTDOWN_PROPERTIES[size].wrapper.height}px;
  width: ${({ size }) => COUNTDOWN_PROPERTIES[size].wrapper.width}px;

  > * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .countdown-time-display {
    font-size: ${({ size }) => COUNTDOWN_PROPERTIES[size].timeDisplay.fontSize};
  }
`;

export const OuterContainer = styled.div`
  width: inherit;
  height: inherit;

  padding: 20px;
  border-radius: 50%;
  box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
    -6px 6px 10px -1px rgba(255, 255, 255, 0.7);
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => COUNTDOWN_PROPERTIES[size].wrapper.height - 40}px;
  width: ${({ size }) => COUNTDOWN_PROPERTIES[size].wrapper.width - 40}px;

  border-radius: 50%;
  box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
    inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
    -0.5px -0.5px 0px rgba(255, 255, 255, 1),
    0.5px 0.5px 0px rgba(0, 0, 0, 0.15);
`;

export const CountdownSvg = styled.svg.attrs({
  className: "countdown-svg",
  xmlns: "https://www.w3.org/2000/svg",
  version: "1.1",
})`
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  left: 0;
`;

const circleStrokeAnimation = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: var(--dasharray);
  }
`;

const colorsChangeAnimation = keyframes`
  0% {
    stroke: #00ff00; 
  }
  20% {
    stroke: #2bff00;
  }
  40% {
    stroke: #5fff00;
  }
  60% {
    stroke: #ffbf00;
  }
  80% {
    stroke: #ff4000;
  }
  100% {
    stroke: #ff0000;
  }
`;


const styleCircleByProps = ({ size, duration }) => {
  return css`
    --dasharray: ${COUNTDOWN_PROPERTIES[size].circle.dasharray}px;
    stroke-dasharray: var(--dasharray);
    stroke-dashoffset: var(--dasharray);
    stroke: green;
    cx: ${COUNTDOWN_PROPERTIES[size].circle.cx};
    cy: ${COUNTDOWN_PROPERTIES[size].circle.cy};
    r: ${COUNTDOWN_PROPERTIES[size].circle.r};
    animation: ${circleStrokeAnimation} ${duration}s linear,
      ${colorsChangeAnimation} ${duration}s linear;
  `;
};

export const Circle = styled.circle`
  strokelinecap: round;
  stroke-width: 20px;
  fill: none;
  ${styleCircleByProps}
`;
