import React from "react";

import "./index.css";
import { Countdown } from "./components";

function App() {
  return (
    <div className="app-container">
      <Countdown
        color1="cyan"
        color2="yellow"
        key="1"
        size="large"
        totalSeconds={888888}
      />
      <Countdown size="medium" totalSeconds={100} />
      <Countdown size="small"  color1="grey" color2="lime"  totalSeconds={11} />
    </div>
  );
}

export default App;
