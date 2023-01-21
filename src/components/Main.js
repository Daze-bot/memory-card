import React from "react";
import ChampDisplay from "./ChampDisplay";

const Main = (props) => {
  const displayChamps = props.champs.map((champ) => {
    return <ChampDisplay 
      name={champ.name}
      key={champ.id}
      addToScore={props.addToScore}
      handleGameOver={props.handleGameOver}
      shuffleCards={props.shuffleCards}
      roundClicks={props.roundClicks}
      newRound={props.newRound}
    />
  })

  return (
    <main>
      {displayChamps}
    </main>
  )
}

export default Main;
