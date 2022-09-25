import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const incremento = () => setCounter((count) => count + 1);
  const decremento = () => setCounter((count) => count - 1);
  return (
    <div>
      <button onClick={decremento}>-</button>
      <span className="px-4">{counter}</span>
      <button onClick={incremento}>+</button>
    </div>
  );
}

