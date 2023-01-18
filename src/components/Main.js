import React from "react";
import ChampDisplay from "./ChampDisplay";

const Main = (props) => {
  return (
    <main>
      <ChampDisplay name="bel'veth" addToScore={props.addToScore} />
      <ChampDisplay name="ahri" addToScore={props.addToScore} />
    </main>
  )
}

export default Main;
