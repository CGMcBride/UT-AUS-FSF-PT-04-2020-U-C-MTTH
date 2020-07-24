import React from "react";
import CounterHooks from "./components/CounterHooks";
import CounterClass from "./components/CounterClass";
function App() {
  return (
    <div>
      <CounterClass />
      <h1>Using class (old) structure below</h1>
      <CounterHooks />
    </div>
  );
}

export default App;
