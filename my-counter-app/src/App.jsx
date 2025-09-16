import React, { useState } from "react";
import './App.css';

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="App"
      style={{
        backgroundColor: count >= 5 ? "orange" : "white",
        minHeight: "100vh", // make sure background covers full screen
        padding: "20px",
      }}
    >
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Count;
