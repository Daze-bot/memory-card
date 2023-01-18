import React from "react";
import Scoreboard from "./Scoreboard";

const Header = (props) => {
  return (
    <header>
      <h1>League of Legends Memory Game</h1>
      <div className="currentRound">Round {props.currentRound}</div>
      <Scoreboard
        currentScore={props.currentScore}
        highScore={props.highScore}
      />
    </header>
  )
}

export default Header;
