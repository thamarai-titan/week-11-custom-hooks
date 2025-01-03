//Practicing the custom hooks

import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }
  
  return {
    count: count,
    increaseCount: increaseCount,
  };
}
function App() {
  const { count, increaseCount } = useCount();

  return (
    <div>
      <button onClick={increaseCount}>Count {count}</button>
    </div>
  );
}

export default App;
