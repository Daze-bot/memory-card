import React, { useEffect, useState } from "react";
import Instructions from "./components/Instructions";
import './styles/styles.css';
import Header from "./components/Header";
import Main from "./components/Main";
import GameOver from "./components/GameOver";

const App = () => {
  const savedHighScore = window.localStorage.getItem('memoryGameHighScore') || 0;

  const [currentScore, setCurrentScore] = useState(0);
  const [finalScore, setFinalScore] = useState(null);
  const [highScore, setHighScore] = useState(savedHighScore);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const addToScore = () => {
    setCurrentScore(currentScore + 1);
  }

  if (currentScore > highScore) {
    setHighScore(currentScore);
  }

  useEffect(() => {
    window.localStorage.setItem('memoryGameHighScore', highScore);
  }, [highScore])

  const handleGameOver = () => {
    setGameOver(true);
  }

  if (gameOver === true) {
    setFinalScore(currentScore);
    setCurrentScore(0);
    setRound(1);
    setGameOver(false);

    return (
      <GameOver 
        score={finalScore}
      />
    )
  }

  const handleNextRound = () => {
    setRound(round + 1);
  }

  if (currentScore === (round * 2) + 2) {
    handleNextRound();
  }

  return (
    <div className="app">
      <Instructions />
      <Header 
        currentRound={round}
        currentScore={currentScore}
        highScore={highScore}
      />
      <Main 
        addToScore={addToScore}
        handleGameOver={handleGameOver}
      />
    </div>
  );
}

export default App;
