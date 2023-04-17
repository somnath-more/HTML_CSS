import { useState } from "react";

function useCounter(initialValue: any, step: any) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount((prevCount: any) => prevCount + step);
  }

  return [count, increment];
}
export default useCounter;
