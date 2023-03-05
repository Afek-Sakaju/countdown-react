import React from "react";
import { Countdown } from "./components";

function App() {
  return (
    <div className="app-container">
      <Countdown
        totalSeconds={120}
        elapsedColor={"blue"}
        remainColor={"purple"}
      />
      <Countdown totalSeconds={62} />
    </div>
  );
}

export default App;
