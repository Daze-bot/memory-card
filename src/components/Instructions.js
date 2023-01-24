import React from "react";

const Instructions = (props) => {
  return (
    <div className="instructions">
      <h1>League of Legends Memory Game</h1>
      <div className="gameRules">
        <h2>Game Rules</h2>
        <br></br>
        <br></br>
        <p>- Never click on the same champion more than once per round.</p>
        <br></br>
        <br></br>
        <p>- Each round will increase the difficulty by adding more champions for you to keep track of.  Try to beat your highscore!
        </p>
      </div>
      <button 
        className="startGameBtn" 
        onClick={props.startGame}
      >Play Game</button>
    </div>
  );
}

export default Instructions;