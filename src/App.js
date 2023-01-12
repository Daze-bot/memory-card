import React, { useState } from "react";

const App = () => {
  const [test, setTest] = useState('test');

  const testTheTest = () => {
    setTest('working');
  }

  return (
    <div>
      <div>{test}</div>
      <button onClick={testTheTest}>Test Me!</button>
    </div>
  );
}

export default App;
