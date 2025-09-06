import React, { useContext } from "react";
import { CounterContext } from "../App";

function CompD() {
  const counter = useContext(CounterContext);
  return (
    <div>
        Comp D - 
      <button onClick={() => counter.dispatch({type: "increament", diff: 1})}>Increase</button>
      <button onClick={() => counter.dispatch({type: "decreament", diff: 1})}>Decrease</button>
      <button onClick={() => counter.dispatch({type: "reset"})}>Reset</button>
    </div>
  );
}

export default CompD;
