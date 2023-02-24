import React from "react";
import { Stopper } from "./components";

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
      <Stopper
        id="stopper-0"
        totalSeconds={120}
        elapsedColor={"blue"}
        remainColor={"purple"}
      />
      <Stopper id="stopper-1" totalSeconds={62} />
    </div>
  );
}

export default App;
