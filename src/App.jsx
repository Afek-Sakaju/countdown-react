import React from "react";

import "./index.css";
import { Countdown } from "@countdown@components";

export default function App() {
  return (
    <div className="app-container">
      <Countdown size="large" totalSeconds={3605} />
      <Countdown size="medium" totalSeconds={125} />
      <Countdown size="small" totalSeconds={65} />
      <Countdown size="large" totalSeconds={40} />
      <Countdown size="medium" totalSeconds={30} />
      <Countdown size="small" totalSeconds={10} />
    </div>
  );
}
