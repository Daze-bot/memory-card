import React, { useState } from "react";
import Instructions from "./components/Instructions";
import './styles/styles.css';
import ChampDisplay from "./components/ChampDisplay";

const App = () => {

  return (
    <div>
      <Instructions />
      <ChampDisplay name="bel'veth" />
      <ChampDisplay name="ahri" />
    </div>
  );
}

export default App;
