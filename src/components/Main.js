import React, { useState } from "react";
import ChampDisplay from "./ChampDisplay";
import champions from "../library/champions";

const currentChamps = champions.sort(() => 0.5 - Math.random()).slice(0, 4);

const Main = (props) => {
  const [unusedChamps, setUnusedChamps] = useState(champions);

  const displayChamps = currentChamps.sort(() => 0.5 - Math.random()).map((champ) => {
    return <ChampDisplay 
      name={champ.name}
      key={champ.id}
      addToScore={props.addToScore}
      handleGameOver={props.handleGameOver}
    />
  })

  return (
    <main>
      {displayChamps}
    </main>
  )
}

export default Main;
