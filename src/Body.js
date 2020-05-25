import React, { useContext } from "react";
import "./styles.css";
import { CountContext } from "./App";

export default function Body() {
  // We are able to access the context we provided in our parent
  // Here we can access our state hooks
  const { count, setCount } = useContext(CountContext);
  return (
    <div className="body">
      <p>Value in body: {count}</p>
      {/* Calling our setCount function */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
