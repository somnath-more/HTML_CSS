import React from "react";
import useCounter from "./useCounter";

function Counter() {
  const [count, increment] = useCounter(0, 8);

  return (
    <div>
      <p>Count: {count}</p>
     
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
