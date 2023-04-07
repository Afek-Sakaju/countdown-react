import React from "react";

import "./index.css";
import { Countdown } from "@components";

export default function App() {
  return (
    <div className="app-container">
      <Countdown
        color1="cyan"
        color2="yellow"
        size="large"
        totalSeconds={3605}
      />
      <Countdown size="medium" totalSeconds={125} />
      <Countdown size="small" color1="grey" color2="lime" totalSeconds={65} />
      <Countdown color1="cyan" color2="yellow" size="large" totalSeconds={40} />
      <Countdown size="medium" totalSeconds={30} />
      <Countdown size="small" color1="grey" color2="lime" totalSeconds={10} />
    </div>
  );
}
