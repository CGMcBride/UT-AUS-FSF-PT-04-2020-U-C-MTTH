// step 0: import the react hook
import React, { useState } from "react";

// By extending the React.Component class, Counter inherits functionality from it
//Step1: convert class to a normal function (arrow or regular up to you)
const Counter = () => {
  // Step 2: Ensure all functions and variables are assigned with a declaration (var,let const)
  // Setting the initial state of the Counter component
  let [state, setState] = useState({
    count: 0,
  });

  // handleIncrement increments this.state.count by 1
  let handleIncrement = () => {
    // We always use the setState method to update a component's state
    setState({ count: state.count + 1 });
  };

  // The render method returns the JSX that should be rendered
  // Step 3. Convert ANY lifecycle methods to approriate hooks

  // Step 4. Remove all relevant references to "THIS"
  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {state.count}</p>
        <button className="btn btn-primary" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
