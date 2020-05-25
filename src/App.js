import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import "./styles.css";

// Init our count context
// Put this in a seperate file to be imported
// im lazy so dropping it here now
export const CountContext = React.createContext(null);

export default function App() {
  // Create a shared state which we can access to make life easier
  const [count, setCount] = useState(0);

  // Provide hooks to our count context which will handle updates for us

  return (
    <div className="App">
      {/* Provide our context to both header and footer */}
      <CountContext.Provider value={{ count, setCount }}>
        <Header />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Body />
      </CountContext.Provider>
    </div>
  );
}
