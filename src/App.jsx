import React from "react";
import { Countdown } from "./components";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2em",
        flexWrap: "wrap",
      }}
    >
      <Countdown
        totalSeconds={120}
        elapsedColor={"blue"}
        remainColor={"purple"}
      />
      <Countdown totalSeconds={62} />
      <Countdown
        totalSeconds={50}
        elapsedColor={"black"}
        remainColor={"yellow"}
      />
    </div>
  );
}

export default App;
