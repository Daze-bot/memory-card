import React, { useEffect } from "react"
import useSound from "use-sound";
import Success from '../sounds/success.wav';

const RoundComplete = (props) => {
  const [success] = useSound(
    Success,
    {volume: 0.2}
  )
  
  useEffect(() => {
    success();

    const timeId = setTimeout(() => {
      props.nextRound();
    }, 1800)

    return () => {
      clearTimeout(timeId)
    }
  });

  if ((props.round - 1) === 80) {
    return (
      <div className="roundComplete">
        <p>Round {props.round - 1} complete. I'm sure you didn't cheat at all to get here!</p> 
        <p>Prepare for round {props.round}.  The rounds will stay the same difficulty from here on out.</p>
      </div>
    )
  } else {
    return (
      <div className="roundComplete">
        <p>Round {props.round - 1} complete!</p> 
        <p>Prepare for round {props.round}</p>
      </div>
    )
  }
}

export default RoundComplete;