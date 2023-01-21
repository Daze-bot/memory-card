import React, { useState } from "react";

const GameOver = (props) => {
  const [loading, setLoading] = useState(false);

  let prompt = '';

  if (props.score === props.highScore) {
    prompt = 'This is a new highscore!';
  } else {
    prompt = '';
  }

  const handleClick = () => {
    props.newGame();
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  if (loading) {
    return (
      <div className="gameOver">
        <div className="loadingScreen">
          LOADING...
          <div className="loader"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="gameOver">
      <h1>GAME OVER</h1>
      <div className="finalScore">
        Congrats! Your score was <span>{props.score}</span>. {prompt}
      </div>
      <button 
        className="newGameBtn" 
        onClick={handleClick}
      >Play Again</button>
    </div>
  );
}

export default GameOver;
