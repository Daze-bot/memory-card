import React from "react"
import { champImages } from "../helpers/championImgLoader";
import useSound from "use-sound";
import Click from '../sounds/click.wav';

const ChampDisplay = (props) => {
  const matchNameToImg = (string) => {
    return string.replace(/\s/g, '').replace(/'/g, '');
  }

  const [click] = useSound(
    Click, 
    {volume: 0.4}
  );

  const clickEvent = () => {
    click();
    props.addToScore();
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
