import React from "react";

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div className="currentScore">
        <p>Score</p> 
        <div>{props.currentScore}</div>
      </div>
      <div className="scoreLine"></div>
      <div className="highScore">
        <p>High Score</p>
        <div>{props.highScore}</div>
      </div>
    </div>
  )
}

export default Scoreboard;
