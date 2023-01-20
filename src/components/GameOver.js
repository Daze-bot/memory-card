import React, { useState } from "react";

const GameOver = (props) => {
  const [visible, setVisible] = useState(true);

  const playAgain = () => {
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="gameOver">
      <h1>Game Over!</h1>
      <div className="finalScore">
        Congrats! Your score was {props.score}
      </div>
      <button 
        className="newGameBtn" 
        onClick={playAgain}
      >Play Again</button>
    </div>
  );
}

export default GameOver;
