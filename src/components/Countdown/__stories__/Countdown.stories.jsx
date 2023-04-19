import React from "react";

import CountDown from "../Countdown";
import { COUNTDOWN_SIZES } from "@countdown@utils";

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

const Template = (args) => <CountDown {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  size: {
    control: "inline-radio",
    options: Object.values(COUNTDOWN_SIZES),
    defaultValue: COUNTDOWN_SIZES.medium,
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
  totalSeconds: { control: { type: "number" }, defaultValue: 50 },
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
