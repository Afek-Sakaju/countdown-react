import React from "react";

import CountDown from "../Countdown";
import { COUNTDOWN_SIZES } from "../../../utils";

export default {
  title: "components/CountDown",
  component: CountDown,
  parameters: {
    controls: {
      exclude: /^(onDone|shouldStop)$/g,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "98vh",
          width: "98vw",
          backgroundColor: "black",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <CountDown />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
        height: "300px",
      }}
    >
      <Story />
    </div>
  ),
];

const Template = (args) => <CountDown totalSeconds={200} {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  size: {
    control: "inline-radio",
    options: COUNTDOWN_SIZES,
    defaultValue: COUNTDOWN_SIZES[0],
  },
  color1: {
    control: { type: "color" },
    defaultValue: "red",
  },
  color2: {
    control: { type: "color" },
    defaultValue: "blue",
  },
  shouldStop: {
    control: { type: "boolean" },
    defaultValue: false,
  },
  totalSeconds: { control: false },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
        height: "300px",
      }}
    >
      <Story />
    </div>
  ),
];
