import React from "react";

import "./index.css";
import { Countdown } from "./components";

function App() {
  return (
    <div className="app-container">
      <Countdown color1="yellow" size="large" />
    </div>
  );
}

export default App;
