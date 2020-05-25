import React, { useContext } from "react";
import "./styles.css";
import { CountContext } from "./App";

export default function Header() {
  // Note how we have ot use the context here
  // We destrcture the values, in this case
  // I could access both count and setCount
  const { count } = useContext(CountContext);

  // This useEffect does run when count updates!
  React.useEffect(() => {
    console.log("Does this get called when value updates", count);
  }, [count]);

  return (
    <div className="header">
      <p>Value is :{count}</p>
    </div>
  );
}
