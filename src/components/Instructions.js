import React from "react";

const Instructions = (props) => {
  return (
    <div className="instructions">
      <h1>League of Legends Memory Game</h1>
      <div className="gameRules">
        <p>The rules are simple - never click on the same champion more than once!</p>
        <br></br>
        <p>Each level will increase the difficulty by adding more champions for you to keep track of.  Try to beat your highscore!
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