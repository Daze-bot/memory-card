import React, { useState } from "react"
import { champImages } from "../helpers/championImgLoader";
import useSound from "use-sound";
import Click from '../sounds/click.wav';

const ChampDisplay = (props) => {
  const [clicked, setClicked] = useState(false);

  const matchNameToImg = (string) => {
    return string.replace(/\s/g, '').replace(/'/g, '').replace(/\./g, '');
  }

  const [click] = useSound(
    Click, 
    {volume: 0.4}
  );

  const checkClicked = () => {
    if (clicked === true) {
      props.handleGameOver();
    }
  }

  const clickEvent = () => {
    click();
    props.addToScore();
    checkClicked();
    setClicked(true);
  }

  return (
    <div>
      <div className="champCard"
        onClick={clickEvent}
      >
        <img className="champImg" src={champImages[`${matchNameToImg(props.name)}.jpg`]} alt={props.name}/>
        <p className="champName">{props.name.toUpperCase()}</p>
      </div>
    </div>
  )
}

export default ChampDisplay;
