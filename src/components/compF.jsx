import React, { useContext } from "react";
import { CounterContext } from "../App";

function CompF() {
  const counter = useContext(CounterContext);
  return (
    <div>
        Comp F - 
      <button onClick={() => counter.dispatch({type:"increament", diff: 1})}>Increament</button>
      <button onClick={() => counter.dispatch({type: "decreament", diff: 1})}>Decreament</button>
      <button onClick={() => counter.dispatch({type: "reset"})}>Reset</button>
    </div>
  );
}

export default CompF;
