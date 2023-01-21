import React, { useEffect, useState } from "react";
import Instructions from "./components/Instructions";
import './styles/styles.css';
import Header from "./components/Header";
import Main from "./components/Main";
import GameOver from "./components/GameOver";
import champions from "./library/champions";

const App = () => {
  const savedHighScore = window.localStorage.getItem('memoryGameHighScore') || 0;

  const [firstLoad, setFirstLoad] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [finalScore, setFinalScore] = useState(null);
  const [highScore, setHighScore] = useState(savedHighScore);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [champs, setChamps] = useState(champions);
  const [roundChamps, setRoundChamps] = useState(champs.sort(() => 0.5 - Math.random()).slice(0, (round * 2 + 2)));
  const [nextRoundChamps, setNextRoundChamps] = useState(champs.sort(() => 0.5 - Math.random()).slice(0, ((round + 1) * 2 + 2)));
  const [roundClicks, setRoundClicks] = useState(0);
  const [freshBoard, setFreshBoard] = useState(true)

  const shuffleChamps = () => {
    setRoundChamps(roundChamps.sort(() => 0.5 - Math.random()));
  }

  const newRound = () => {
    setRoundChamps(nextRoundChamps);
  }

  const handleRoundClick = () => {
    setFreshBoard(false);
    setRoundClicks(roundClicks + 1);
    setNextRoundChamps(champs.sort(() => 0.5 - Math.random()).slice(0, ((round + 1) * 2 + 2)));
  }

  const resetRoundClicks = () => {
    setRoundClicks(0);
    setFreshBoard(true);
  }

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
    setFinalScore(currentScore);
    setRound(1);
  }

  const handleNewGame = () => {
    setCurrentScore(0);
    setRoundClicks(0);
    setRoundChamps(champs.sort(() => 0.5 - Math.random()).slice(0, (round * 2 + 2)));
    setTimeout(() => {
      setGameOver(false);
    }, 1500);
  }

  const handleNextRound = () => {
    newRound();
    resetRoundClicks();
  }

  if (roundClicks === (round * 2) + 2 && !gameOver) {
    setRound(round + 1);
    handleNextRound();
  }

  const startGame = () => {
    setFirstLoad(false);
  }

  if (firstLoad === true) {
      return (
        <div className="app">
          <Instructions
            startGame={startGame}
          />
        </div>
      );
  } else if (gameOver === true) {   
    return (
      <div className="app">
        <GameOver
          score={finalScore}
          newGame={handleNewGame}
          highScore={highScore}
        />
      </div>
    );
  } else {
    return (
      <div className="app">
        <Header 
          currentRound={round}
          currentScore={currentScore}
          highScore={highScore}
        />
        <Main 
          addToScore={addToScore}
          handleGameOver={handleGameOver}
          champs={roundChamps}
          shuffleCards={shuffleChamps}
          roundClicks={handleRoundClick}
          newRound={freshBoard}
        />
      </div>
    );
  }
}

export default App;
