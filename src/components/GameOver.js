import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import HighScoreSound from '../sounds/highScore.wav';
import GameEnd from '../sounds/gameEnd.wav';

const GameOver = (props) => {
  const [loading, setLoading] = useState(false);
  const [sound, setSound] = useState(true);

  let prompt = '';

  if (props.score === props.highScore) {
    prompt = 'This is a new highscore!';
  } else {
    prompt = '';
  }

  const [highScoreSound] = useSound(
    HighScoreSound,
    {volume: 0.2}
  )

  const [gameOverSound] = useSound(
    GameEnd,
    {volume: 0.3}
  )

  useEffect(() => {
    if (sound && props.score === props.highScore) {
      highScoreSound();
    } else if (sound) {
      gameOverSound();
    }
  });

  const handleClick = () => {
    setSound(false);
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
