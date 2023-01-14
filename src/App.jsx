import React from "react";
import { Stopper } from "./base-components";

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
      <Stopper id="stopper-0" totalSeconds={5} />
      {/*<Stopper*/}
      {/*  id="stopper-1"*/}
      {/*  totalSeconds={60}*/}
      {/*  remainColor={"#96be25"}*/}
      {/*  elapsedColor={"#101010"}*/}
      {/*/>*/}
      {/*<Stopper*/}
      {/*  id="stopper-2"*/}
      {/*  totalSeconds={90}*/}
      {/*  remainColor={"#7225be"}*/}
      {/*  elapsedColor={"#20FF00"}*/}
      {/*/>*/}
      {/*<Stopper id="stopper-3" totalSeconds={0} remainColor={"#ac0e56"} />*/}
      {/*<Stopper id="stopper-4" totalSeconds={3605} remainColor={"#071de0"} />*/}
    </div>
  );
}

export default App;
