import React from "react"
import { champImages } from "../helpers/championImgLoader";

const ChampDisplay = (props) => {
  function matchNameToImg(string) {
    return string.replace(/\s/g, '').replace(/'/g, '');
  }

  return (
    <div>
      <div className="champCard">
        <img className="champImg" src={champImages[`${matchNameToImg(props.name)}.jpg`]} alt={props.name}/>
        <p className="champName">{props.name.toUpperCase()}</p>
      </div>
    </div>
  )
}

export default ChampDisplay;
