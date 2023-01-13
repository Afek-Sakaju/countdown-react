import { Stopper } from "./base-components/";

function App() {
  return (
    <div id="card">
      <Stopper id="stopper" totalSeconds={1002} remainColor="#96be25"></Stopper>
    </div>
  );
}

export default App;
