//Practicing the custom hooks

import { useState } from "react";
import { UseFetch } from "./useFetch";

function useCount() {
  const [count, setCount] = useState(0);

  const {data} = UseFetch();

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
      {data.title}
    </div>
  );
}

export default App;
