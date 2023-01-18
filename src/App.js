import React, { useEffect, useState } from "react";
import Instructions from "./components/Instructions";
import './styles/styles.css';
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const savedHighScore = window.localStorage.getItem('memoryGameHighScore') || 0;

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(savedHighScore);
  const [round, setRound] = useState(1);

  const addToScore = () => {
    setCurrentScore(currentScore + 1);
  }

  if (currentScore > highScore) {
    setHighScore(currentScore);
  }

  useEffect(() => {
    window.localStorage.setItem('memoryGameHighScore', highScore);
  }, [highScore])

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
      />
    </div>
  );
}

export default App;
