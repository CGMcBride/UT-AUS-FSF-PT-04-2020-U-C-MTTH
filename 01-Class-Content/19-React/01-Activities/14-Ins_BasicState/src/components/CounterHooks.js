import React, { useState } from "react";
// By extending the React.Component class, Counter inherits functionality from it
const Counter = () => {
  // Setting the initial state of the Counter component
  let [state, setState] = useState({
    count: 0,
  });

  // handleIncrement increments this.state.count by 1
  const handleIncrement = () => {
    // We always use the setState method to update a component's state
    setState({ count: state.count + 1 });
  };

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
