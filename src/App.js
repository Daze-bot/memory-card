import React, { useState } from "react";
import Instructions from "./components/instructions";
import './styles/styles.css';

const App = () => {
  const [test, setTest] = useState('test');

  const testTheTest = () => {
    setTest('working');
  }

  return (
    <div>
      <div>{test}</div>
      <button onClick={testTheTest}>Test Me!</button>
      <Instructions />
    </div>
  );
}

export default App;
