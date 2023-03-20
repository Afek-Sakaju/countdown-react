import React from "react";
import { Countdown } from "./components";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Countdown color1="yellow" size="large" />
    </div>
  );
}

export default App;
